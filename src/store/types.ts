export interface Movie {
    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
    vote_count: number;
  }
  
  export interface State {
    favorites: Movie[];
  }
  
  export interface Actions {
    addFavorite(context: { commit: Function }, movie: Movie): void;
    removeFavorite(context: { commit: Function }, movieId: number): void;
    clearFavorites(context: { commit: Function }): void;
  }
  