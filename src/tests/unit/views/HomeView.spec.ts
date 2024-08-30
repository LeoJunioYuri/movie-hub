import { mount, VueWrapper } from '@vue/test-utils';
import { createStore, Store } from 'vuex';
import HomeView from '@/views/HomeView.vue';
import MovieCard from '@/components/MovieCard.vue';
import SubmitButton from '@/components/SubmitButton.vue';
import { fetchTopRatedMovies } from '@/services/movieService';

jest.mock('@/services/movieService', () => ({
  fetchTopRatedMovies: jest.fn(),
}));

describe('HomeView.vue', () => {
  let wrapper: VueWrapper<any>;
  let store: Store;

  beforeEach(() => {
    store = createStore({
      state: {
        favorites: [],
      },
      getters: {
        allFavorites: (state: { favorites: any[] }) => state.favorites,
      },
      actions: {
        addFavorite: jest.fn(),
        removeFavorite: jest.fn(),
      },
    });

    (fetchTopRatedMovies as jest.Mock).mockResolvedValue({
      results: [
        {
          id: 1,
          poster_path: 'test.jpg',
          title: 'Filme de Teste',
          vote_average: 8.5,
          vote_count: 1000,
        },
      ],
    });

    wrapper = mount(HomeView, {
      global: {
        plugins: [store],
        stubs: {
          MovieCard,
          SubmitButton,
        },
      },
    });
  });

  it('renderiza corretamente', () => {
    expect(wrapper.find('.page-title').text()).toBe('Filmes Mais Avaliados');
    expect(wrapper.find('.movies-grid').exists()).toBe(true);
  });

  it('exibe os filmes corretamente', async () => {
    await wrapper.vm.$nextTick();
    const movieCard = wrapper.findComponent(MovieCard);
    expect(movieCard.exists()).toBe(true);
    expect(movieCard.props('title')).toBe('Filme de Teste');
    expect(movieCard.props('poster_path')).toBe('test.jpg');
    expect(movieCard.props('vote_average')).toBe(8.5);
    expect(movieCard.props('vote_count')).toBe(1000);
  });

  it('carrega mais filmes quando o botão "Carregar mais" é clicado', async () => {
    const loadMoreButton = wrapper.findComponent(SubmitButton);
    await loadMoreButton.trigger('click');

    expect(fetchTopRatedMovies).toHaveBeenCalledWith(2);
  });
});
