import { createStore } from 'vuex';
import { State, Movie } from '@/store/types';
import store from '@/store';

describe('Store Vuex', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('deve inicializar com favoritos do localStorage', () => {
    const movie: Movie = {
      id: 1, 
      title: 'Inception',
      poster_path: '',
      vote_average: 0,
      vote_count: 0
    };
    localStorage.setItem('favorites', JSON.stringify([movie]));

    const testStore = createStore({
      state: store.state,
      mutations: store.mutations,
      actions: store.actions,
      getters: store.getters,
    });

    expect(testStore.state.favorites).toEqual([movie]);
  });

  it('deve adicionar um filme aos favoritos', () => {
    const movie: Movie = {
      id: 1, 
      title: 'Inception',
      poster_path: '',
      vote_average: 0,
      vote_count: 0
    };
    const testStore = createStore({
      state: store.state,
      mutations: store.mutations,
      actions: store.actions,
      getters: store.getters,
    });

    testStore.commit('addFavorite', movie);

    expect(testStore.state.favorites).toContain(movie);
    expect(localStorage.getItem('favorites')).toContain(movie.title);
  });

  it('deve remover um filme dos favoritos', () => {
    const movie: Movie = {
      id: 1, 
      title: 'Inception',
      poster_path: '',
      vote_average: 0,
      vote_count: 0
    };
    const testStore = createStore({
      state: {
        favorites: [movie],
      },
      mutations: store.mutations,
      actions: store.actions,
      getters: store.getters,
    });

    testStore.commit('removeFavorite', movie.id);

    expect(testStore.state.favorites).not.toContain(movie);
    expect(localStorage.getItem('favorites')).toBe('[]');
  });

  it('deve limpar todos os favoritos', () => {
    const movie: Movie = {
      id: 1, 
      title: 'Inception',
      poster_path: '',
      vote_average: 0,
      vote_count: 0
    };
    const testStore = createStore({
      state: {
        favorites: [movie],
      },
      mutations: store.mutations,
      actions: store.actions,
      getters: store.getters,
    });

    testStore.commit('clearFavorites');

    expect(testStore.state.favorites).toEqual([]);
    expect(localStorage.getItem('favorites')).toBe('[]');
  });

  it('deve retornar todos os favoritos', () => {
    const movie: Movie = {
      id: 1, 
      title: 'Inception',
      poster_path: '',
      vote_average: 0,
      vote_count: 0
    };
    const testStore = createStore({
      state: {
        favorites: [movie],
      },
      mutations: store.mutations,
      actions: store.actions,
      getters: store.getters,
    });

    expect(testStore.getters.allFavorites).toEqual([movie]);
  });
});
