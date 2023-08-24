import { getSearchMovie } from 'components/Api';
import MovieList from 'components/MovieList/MovieList';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Form, FormWrapper, Input } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setsearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      setMovies([]);
    }
    const getSearch = async () => {
      try {
        const results = await getSearchMovie(query);
        setMovies([...results.data.results]);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    };
    getSearch();
  }, [query]);

  const updateQueryString = evt => {
    const searchMovieName = evt.target.value;
    if (searchMovieName === '') {
      return setsearchParams({});
    }
    setsearchParams({ query: searchMovieName });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    updateQueryString();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormWrapper>
        <Input type="text" value={query} onChange={updateQueryString}></Input>
        <Button type="submit">Search</Button>
      </FormWrapper>
      <MovieList movies={movies} />
    </Form>
  );
};

export default Movies;
