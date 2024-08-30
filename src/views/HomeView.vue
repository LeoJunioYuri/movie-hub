<template>
  <div>
    <h1 class="page-title">Top Rated Filmes</h1>
    <div class="movies-grid">
      <MovieCard
        v-for="movie in movies"
        :key="movie.id"
        :id="movie.id"
        :poster_path="movie.poster_path"
        :title="movie.title"
        :vote_average="movie.vote_average"
        :vote_count="movie.vote_count"
      />
    </div>
    <div class="load-more-wrapper">
      <SubmitButton @click="loadMore">Carregar mais</SubmitButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchTopRatedMovies } from '../services/movieService';
import MovieCard from '@/components/MovieCard.vue';
import SubmitButton from '@/components/SubmitButton.vue';

const movies = ref<any[]>([]);
const page = ref(1);

const loadMovies = async () => {
  const data = await fetchTopRatedMovies(page.value);
  movies.value.push(...data.results);
};

onMounted(() => {
  loadMovies();
});

const loadMore = () => {
  page.value += 1;
  loadMovies();
};
</script>

<style scoped>
.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.2rem;
  row-gap: 4rem;
  justify-content: center;
  max-width: 1600px;
  margin: 0 auto;
}

.movies-grid .movie-card {
  margin: 0;
}

.load-more-wrapper {
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  margin-bottom: 6rem;
}

@media (max-width: 600px) {
  .movies-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }
}
</style>
