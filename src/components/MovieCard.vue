<template>
  <div class="movie-card">
    <img :src="'https://image.tmdb.org/t/p/w500/' + poster_path" alt="Movie Poster"/>
    <div class="movie-content">
      <h2>{{ title }}</h2>
      <p>Rating: {{ vote_average }} ({{ vote_count }} votes)</p>
      <div class="movie-buttons">
        <RouterLink :to="'/movie/' + id" class="details-btn">View Details</RouterLink>
        <button @click="toggleFavorite" class="favorite-btn">
          {{ isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import { useStore } from 'vuex';

const props = defineProps<{
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
}>();

const store = useStore();

const isFavorite = ref(store.getters.allFavorites.some((fav: any) => fav.id === props.id));

const toggleFavorite = () => {
  if (isFavorite.value) {
    store.dispatch('removeFavorite', props.id);
  } else {
    store.dispatch('addFavorite', {
      id: props.id,
      poster_path: props.poster_path,
      title: props.title,
      vote_average: props.vote_average,
      vote_count: props.vote_count
    });
  }
  isFavorite.value = !isFavorite.value;
};
</script>


<style scoped>
.movie-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 0.5rem;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.movie-card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.movie-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.movie-card h2 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.movie-card p {
  margin: 0.5rem 0;
  color: #555;
  font-size: 0.9rem;
}

.movie-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
}

.details-btn, .favorite-btn {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.favorite-btn {
  background-color: #ff5722;
}

.favorite-btn:hover {
  background-color: #e64a19;
}

.details-btn:hover {
  background-color: #0056b3;
}
</style>
