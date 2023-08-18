import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

const Cast = () => {
  //   const params = useParams();
  //     console.log(params);

  const { movieId } = useParams();
  //   console.log(movieId);

  // useEffect(() => {
  //   //HTTP запит по movieId для отримання касту по
  // конкретному фільму
  // }, []);

  return <p>Cast</p>;
};

export default Cast;
