import Head from 'next/head';
import Image from 'next/image';
import { GetStaticPaths } from 'next';

import { getDetailApi, getPopularApi, imagePath } from '@/utils/api';

import { MovieDetail, MovieType } from '@/interface';

interface StaticProps {
  movie: number;
}

interface Props {
  data: MovieDetail;
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await getPopularApi();
    const data = await res.json();
    const paths = data.results.map((movie: MovieType) => `/movie/${movie.id}`);
    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
    return {
      paths: [],
      fallback: false,
    };
  }
};

export const getStaticProps = async ({ params }: { params: StaticProps }) => {
  try {
    const { movie } = params;
    const res = await getDetailApi(movie);
    const data: MovieDetail = await res.json();

    return {
      props: { data },
    };
  } catch (err) {
    console.log(err);
  }
};

const MovieDetail: React.FC<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h2 className="text-2xl">{data.title}</h2>
        <h2 className="text-lg">{data.release_date}</h2>
        <h2>Runtime: {data.runtime} minutes</h2>
        <h2 className="my-2 inline-block rounded-md bg-green-600 py-2 px-4 text-sm">
          {data.status}
        </h2>
        <Image
          className="my-12 w-full"
          src={imagePath + data.backdrop_path}
          width={1000}
          height={1000}
          alt={data.title}
          priority
        />
        <div className="my-4">
          <p className="text-lg">{data.overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
