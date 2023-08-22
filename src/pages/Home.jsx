import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'components/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    //HTTP запит популярних фільмів
    const getFavMovies = async () => {
      try {
        const results = await getTrendingMovies();
        setMovies([...results.data.results]);
        console.log(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getFavMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <div>
        <ul>
          {movies.map(({ id, title, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={
                    // poster_path ?
                    `https://image.tmdb.org/t/p/w300/${poster_path}`
                    // : defaultPosterImage
                  }
                  alt={title}
                  width={240}
                ></img>
                <p>{title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
