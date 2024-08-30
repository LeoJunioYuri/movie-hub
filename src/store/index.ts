import { createStore } from 'vuex';

const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
};

const saveFavoritesToLocalStorage = (favorites: any[]) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

export default createStore({
  state() {
    return {
      favorites: getFavoritesFromLocalStorage(),
    };
  },
  mutations: {
    addFavorite(state: { favorites: Array<any> }, movie: any) {
      console.log('Mutation addFavorite triggered with:', movie);
      if (!state.favorites.find(fav => fav.id === movie.id)) {
        state.favorites.push(movie);
        saveFavoritesToLocalStorage(state.favorites);
      }
    },
    removeFavorite(state: { favorites: Array<any> }, movieId: number) {
      state.favorites = state.favorites.filter(movie => movie.id !== movieId);
      saveFavoritesToLocalStorage(state.favorites);
    },
    clearFavorites(state: { favorites: Array<any> }) {
      state.favorites = [];
      saveFavoritesToLocalStorage(state.favorites);
    },
  },
  actions: {
    addFavorite({ commit }: { commit: Function }, movie: any) {
      console.log('Action addFavorite triggered with:', movie);
      commit('addFavorite', movie);
    },
    removeFavorite({ commit }: { commit: Function }, movieId: number) {
      commit('removeFavorite', movieId);
    },
    clearFavorites({ commit }: { commit: Function }) {
      commit('clearFavorites');
    },
  },
  getters: {
    allFavorites: (state: { favorites: Array<any> }) => state.favorites,
  },
});
