import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from '../Api';
import { ActorName, CastItem, CastList, CastWrapper } from './Cast.styled';
import defaultImage from '../../images/noUserImage.png';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const results = await getMovieCast(movieId);
        console.log(results.data.cast);
        setCast([...results.data.cast]);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <CastWrapper>
      <CastList>
        {cast.map(({ id, profile_path, name, character }) => (
          <CastItem key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w300/${profile_path}`
                  : defaultImage
              }
              alt={name}
              width={120}
            ></img>
            <ActorName>{name}</ActorName>
            <span>Character:</span> <b>{character}</b>
          </CastItem>
        ))}
      </CastList>
    </CastWrapper>
  );
};

export default Cast;
