// import { useEffect } from 'react';
import { getMovieDetails } from 'components/Api';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import { useRef, useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  // console.log(backLinkLocationRef);

  //Для того щоб зробити запит на бекенд по даних конкретного фільму
  //треба взяти id фільму з url і по ньому робити запит
  //params - це об'єкт параметрів {movieId: 'movie-2'}
  //   const params = useParams();
  //   console.log(params);

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    //HTTP запит по movieId
    const getMovie = async () => {
      try {
        const results = await getMovieDetails(movieId);
        console.log(results.data);
        setMovie(results.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [movieId]);

  // const {
  //   original_title,
  //   release_date,
  //   vote_average,
  //   poster_path,
  //   overview,
  //   genres,
  // } = movie;

  return (
    <div>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      <ul>
        <li>{movie.title}</li>
        <li>{movie.overview}</li>
        <li>genres</li>
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
