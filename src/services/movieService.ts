import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTopRatedMovies = async (page: number) => {
  const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
    params: {
      api_key: API_KEY,
      page,
    },
  });
  return response.data;
};

export const fetchMovieDetails = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};
