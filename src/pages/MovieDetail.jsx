// import { useEffect } from 'react';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  //Для того щоб зробити запит на бекенд по даних конкретного фільму
  //треба взяти id фільму з url і по ньому робити запит
  //params - це об'єкт параметрів {movieId: 'movie-2'}
  //   const params = useParams();
  //   console.log(params);

  const { movieId } = useParams();
  console.log(movieId);

  // useEffect(() => {
  //   //HTTP запит по movieId
  // }, []);

  return (
    <div>
      <button>Go back</button>
      <h1>Сторінка 1 фільму</h1>
      <ul>
        <li>Name</li>
        <li>Overview</li>
        <li>Genres</li>
      </ul>
      <ul>
        <li>
          <Link to="cast">{<Cast />}</Link>
        </li>
        <li>
          <Link to="reviews">{<Reviews />}</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default MovieDetails;
