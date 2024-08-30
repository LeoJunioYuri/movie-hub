import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MovieDetails from '../views/MovieDetails.vue';
import FavoriteMovies from '../views/FavoriteMovies.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true,
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: FavoriteMovies,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
