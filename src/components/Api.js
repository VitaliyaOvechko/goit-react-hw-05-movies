import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '016aafc1fde2508ef526b5b862551515';

//api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/all/day?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovie = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetails = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCast = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
