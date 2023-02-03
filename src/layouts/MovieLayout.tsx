import { MovieType } from '@/interface';

import Movie from '@/components/Movie';

interface Props {
  movieList: MovieType[];
}

const MovieList: React.FC<Props> = ({ movieList }) => {
  return (
    <div className="grid grid-cols-fluid gap-16">
      {movieList.map((movie: MovieType) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          release_date={movie.release_date}
        />
      ))}
    </div>
  );
};

export default MovieList;
