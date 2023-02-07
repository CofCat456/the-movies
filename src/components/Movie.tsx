import Image from 'next/image';
import Link from 'next/link';

import { imagePath } from '@/utils/api';

interface Props {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const Movie: React.FC<Props> = ({ id, title, poster_path, release_date }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
      <Link href={`/movie/${id}`}>
        <Image src={imagePath + poster_path} width={800} height={800} alt={title} priority />
      </Link>
    </div>
  );
};

export default Movie;
