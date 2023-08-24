import { useLocation } from 'react-router-dom';
import { List, ListItem, MovieLink, MovieName } from './MovieList.styled';
import defaultPosterImage from '../../images/noPosterImage.jpg';

function MovieList({ movies }) {
  const location = useLocation();
  return (
    <div>
      <List>
        {movies.map(({ id, title, name, poster_path }) => (
          <ListItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                    : defaultPosterImage
                }
                alt={title}
                width={240}
              ></img>
              <MovieName>{title ? title : name}</MovieName>
            </MovieLink>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default MovieList;
