import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchTopRatedMovies, fetchMovieDetails } from '@/services/movieService';

const mock = new MockAdapter(axios);

describe('movieService.ts', () => {
  afterEach(() => {
    mock.reset();
  });

  it('deve buscar filmes mais bem avaliados corretamente', async () => {
    const page = 1;
    const mockData = {
      results: [
        {
          id: 1,
          poster_path: 'test.jpg',
          title: 'Filme de Teste',
          vote_average: 8.5,
          vote_count: 1000,
        },
      ],
    };

    mock.onGet(`https://api.themoviedb.org/3/movie/top_rated`, {
      params: {
        api_key: expect.any(String),
        page,
      },
    }).reply(200, mockData);

    const response = await fetchTopRatedMovies(page);

    expect(response).toEqual(mockData);
  });

  it('deve buscar detalhes de um filme corretamente', async () => {
    const movieId = '1';
    const mockData = {
      id: 1,
      poster_path: 'test.jpg',
      title: 'Filme de Teste',
      vote_average: 8.5,
      vote_count: 1000,
    };

    mock.onGet(`https://api.themoviedb.org/3/movie/${movieId}`, {
      params: {
        api_key: expect.any(String),
      },
    }).reply(200, mockData);

    const response = await fetchMovieDetails(movieId);

    expect(response).toEqual(mockData);
  });
});
