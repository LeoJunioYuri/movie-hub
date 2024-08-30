<template>
  <div>
    <div class="header">
      <h1 class="page-title">Favoritos</h1>
      <SubmitButton class="clear-btn" @click="clearFavorites">Remover todos Favoritos</SubmitButton>
    </div>
    <div v-if="favorites.length" class="favorites-grid">
      <MovieCard
        v-for="movie in favorites"
        :key="movie.id"
        :id="movie.id"
        :poster_path="movie.poster_path"
        :title="movie.title"
        :vote_average="movie.vote_average"
        :vote_count="movie.vote_count"
      />
    </div>
    <p v-else class="no-favorites">Não foram encontrados filmes favoritos</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import MovieCard from '@/components/MovieCard.vue';
import SubmitButton from '@/components/SubmitButton.vue';

const store = useStore();

const favorites = computed(() => store.getters.allFavorites);

const clearFavorites = () => {
  store.dispatch('clearFavorites');
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  padding: 0 1rem;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  margin: 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.clear-btn {
  background-color: red;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.clear-btn:hover {
  background-color: darkred;
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
}

.no-favorites {
  text-align: center;
  color: #666;
}
</style>
