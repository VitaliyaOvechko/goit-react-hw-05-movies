import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieReviews } from '../Api';
import {
  NoReviewTitle,
  ReviewList,
  ReviewItem,
  ReviewWrapper,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const results = await getMovieReviews(movieId);
        console.log(results.data.results);
        setReviews([...results.data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <ReviewWrapper>
      {reviews.length === 0 ? (
        <NoReviewTitle> We don't have any reviews for this movie</NoReviewTitle>
      ) : (
        <ReviewList>
          {reviews.map(({ id, author, content }) => (
            <ReviewItem key={id}>
              <h2>Author: {author}</h2>
              <p>{content}</p>
            </ReviewItem>
          ))}
        </ReviewList>
      )}
    </ReviewWrapper>
  );
};

export default Reviews;
