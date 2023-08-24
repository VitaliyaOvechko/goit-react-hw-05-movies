import { getMovieDetails } from 'components/Api';
import { useRef, useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import {
  AddTitle,
  AddLink,
  AdditionalItem,
  Additional,
  BackBtn,
  Info,
  ItemGenres,
  ListGenres,
  MovieDetailWrapper,
  MovieWrapper,
  AddList,
  InfoItem,
  MovieName,
  InfoItemTitle,
  NoInfoTitle,
} from './MovieDetail.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    //HTTP запит по movieId
    const getMovie = async () => {
      try {
        const results = await getMovieDetails(movieId);
        setMovie(results.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [movieId]);

  const {
    title,
    name,
    release_date,
    vote_average,
    poster_path,
    overview,
    genres,
  } = movie;

  const userScore = vote_average?.toFixed(1) * 10;
  const releaseDate = new Date(release_date);

  return (
    <div>
      <BackBtn to={backLinkLocationRef.current}>Go back</BackBtn>
      {title === undefined ? (
        <NoInfoTitle>No detail about movie</NoInfoTitle>
      ) : (
        <MovieWrapper>
          <MovieDetailWrapper>
            <img
              src={
                // poster_path ?
                `https://image.tmdb.org/t/p/w300/${poster_path}`
                // : defaultPosterImage
              }
              alt={title}
              width={240}
            ></img>
            <Info>
              <InfoItem>
                <MovieName>
                  {title ? title : name} ({releaseDate.getFullYear()})
                </MovieName>
              </InfoItem>
              <InfoItem>User Score: {userScore}%</InfoItem>
              <InfoItem>
                <InfoItemTitle>Overview</InfoItemTitle>
                {overview}
              </InfoItem>
              <InfoItem>
                <InfoItemTitle>Genres</InfoItemTitle>
                <ListGenres>
                  {genres &&
                    genres.map(({ id, name }) => (
                      <ItemGenres key={id}>{name}</ItemGenres>
                    ))}
                </ListGenres>
              </InfoItem>
            </Info>
          </MovieDetailWrapper>
          <Additional>
            <AddTitle>Additional information</AddTitle>
            <AddList>
              <AdditionalItem>
                <AddLink to="cast" state={location.state}>
                  Cast
                </AddLink>
              </AdditionalItem>
              <AdditionalItem>
                <AddLink to="reviews" state={location.state}>
                  Reviews
                </AddLink>
              </AdditionalItem>
            </AddList>
          </Additional>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </MovieWrapper>
      )}
    </div>
  );
};
export default MovieDetails;
