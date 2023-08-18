// import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // useEffect(() => {
  //   //HTTP запит популярних фільмів
  // }, []);

  return (
    <div>
      {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(movie => {
        return (
          <Link key={movie} to={`/movies/${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
    // <ul>
    //   <p>Trending movies</p>
    //   <li>Movie 1</li>
    //   <li>Movie 2</li>
    //   <li>Movie 3</li>
    // </ul>
  );
};

export default Home;

// key = { movieId };
