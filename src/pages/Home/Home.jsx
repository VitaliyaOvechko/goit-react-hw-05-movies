import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'components/Api';
import MoviesList from 'components/MovieList/MovieList';
import { HomeTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //HTTP запит популярних фільмів
    const getFavMovies = async () => {
      try {
        const results = await getTrendingMovies();
        setMovies([...results.data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    getFavMovies();
  }, []);

  return (
    <div>
      <HomeTitle>Trending today</HomeTitle>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
