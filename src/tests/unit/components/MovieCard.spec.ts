import { mount, VueWrapper } from '@vue/test-utils';
import { createStore, Store } from 'vuex';
import MovieCard from '@/components/MovieCard.vue';
import { State } from '../../../store/types';

describe('MovieCard.vue', () => {
  let store: Store;
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    store = createStore({
      state: {
        favorites: [],
      },
      getters: {
        allFavorites: (state: State) => state.favorites,
      },
      actions: {
        addFavorite: jest.fn(),
        removeFavorite: jest.fn(),
      },
    });

    wrapper = mount(MovieCard, {
      props: {
        id: 1,
        poster_path: 'test.jpg',
        title: 'Test Movie',
        vote_average: 8.5,
        vote_count: 1000,
      },
      global: {
        plugins: [store],
        stubs: ['RouterLink'],
      },
    });
  });

  it('renderiza corretamente com props', () => {
    expect(wrapper.find('h2').text()).toBe('Test Movie');
    expect(wrapper.find('p').text()).toBe('Rating: 8.5 (1000 votes)');
    expect(wrapper.find('img').attributes('src')).toBe('https://image.tmdb.org/t/p/w500/test.jpg');
  });

  it('exibe botão de adicionar/remover dos favoritos corretamente', async () => {
    const favoriteButton = wrapper.find('.favorite-btn');

    expect(favoriteButton.text()).toBe('Adicionar aos Favoritos');

    await favoriteButton.trigger('click');

    expect(store.dispatch).toHaveBeenCalledWith('addFavorite', expect.any(Object));
    expect(favoriteButton.text()).toBe('Remover dos Favoritos');

    await favoriteButton.trigger('click');

    expect(store.dispatch).toHaveBeenCalledWith('removeFavorite', 1);
  });

  it('navega para a página de detalhes do filme corretamente', () => {
    const detailsButton = wrapper.findComponent({ name: 'RouterLink' });
    expect(detailsButton.exists()).toBe(true);
    expect(detailsButton.props('to')).toBe('/movie/1');
  });
});
