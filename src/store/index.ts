import { createStore } from 'vuex';
import { State, Movie, Actions } from './types';

const getFavoritesFromLocalStorage = (): Movie[] => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

const saveFavoritesToLocalStorage = (favorites: Movie[]) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export default createStore({
  state() {
    return {
      favorites: getFavoritesFromLocalStorage(),
    };
  },
  mutations: {
    addFavorite(state: State, movie: Movie) {
      console.log('Mutation addFavorite triggered with:', movie);
      if (!state.favorites.find(fav => fav.id === movie.id)) {
        state.favorites.push(movie);
        saveFavoritesToLocalStorage(state.favorites);
      }
    },
    removeFavorite(state: State, movieId: number) {
      state.favorites = state.favorites.filter(movie => movie.id !== movieId);
      saveFavoritesToLocalStorage(state.favorites);
    },
    clearFavorites(state: State) {
      state.favorites = [];
      saveFavoritesToLocalStorage(state.favorites);
    },
  },
  actions: {
    addFavorite({ commit }: { commit: Function }, movie: Movie) {
      console.log('Action addFavorite triggered with:', movie);
      commit('addFavorite', movie);
    },
    removeFavorite({ commit }: { commit: Function }, movieId: number) {
      commit('removeFavorite', movieId);
    },
    clearFavorites({ commit }: { commit: Function }) {
      commit('clearFavorites');
    },
  } as Actions,
  getters: {
    allFavorites: (state: State) => state.favorites,
  },
});
