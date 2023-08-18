import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';

const Reviews = () => {
  //   const params = useParams();
  //     console.log(params);

  const { movieId } = useParams();
  //   console.log(movieId);

  // useEffect(() => {
  //   //HTTP запит по movieId для отримання відгуків по
  // конкретному фільму
  // }, []);

  return <p>Reviews</p>;
};

export default Reviews;
