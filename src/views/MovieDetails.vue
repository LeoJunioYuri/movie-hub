<template>
    <div v-if="movie" class="movie-details">
      <h1 class="movie-title">{{ movie.title }}</h1>
      <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="Movie Poster" class="movie-poster" />
      <p class="movie-overview">{{ movie.overview }}</p>
      <p class="movie-info">
        <strong>Gêneros:</strong> {{ movie.genres.map(genre => genre.name).join(', ') }}
      </p>
      <p class="movie-info">
        <strong>Data de lançamento:</strong> {{ movie.release_date }}
      </p>
      <p class="movie-info">
        <strong>Orçamento:</strong> {{ movie.revenue }}
      </p>
      <button @click="toggleFavorite" class="favorite-button">
        {{ isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos' }}
      </button>
    </div>
    <p v-else class="loading-message">Carregando detalhes dos filmes...</p>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import { fetchMovieDetails } from '../services/movieService';
  
  const store = useStore();
  const route = useRoute();
  const movie = ref<any>(null);
  
  const loadMovieDetails = async () => {
    try {
      const data = await fetchMovieDetails(route.params.id as string);
      movie.value = data;
    } catch (error) {
      console.error('Erro ao carregador detalhes dos filmes:', error);
    }
  };
  
  onMounted(() => {
    loadMovieDetails();
  });
  
  const isFavorite = computed(() => {
    return store.getters.allFavorites.some(fav => fav.id === movie.value?.id);
  });
  
  const toggleFavorite = () => {
    if (isFavorite.value) {
      store.dispatch('removeFavorite', movie.value.id);
    } else {
      store.dispatch('addFavorite', movie.value);
    }
  };
  </script>
  
  <style scoped>
  .movie-details {
    padding: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }
  
  .movie-title {
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .movie-poster {
    max-width: 100%;
    height: auto;
    margin-bottom: 1.5rem;
  }
  
  .movie-overview {
    font-size: 1rem;
    line-height: 1.5;
    color: #555;
    margin-bottom: 1.5rem;
  }
  
  .movie-info {
    font-size: 1rem;
    color: #777;
    margin-bottom: 0.5rem;
  }
  
  .favorite-button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 1rem;
  }
  
  .favorite-button:hover {
    background-color: #c0392b;
  }
  
  .loading-message {
    text-align: center;
    font-size: 1.2rem;
    color: #777;
    margin-top: 2rem;
  }
  </style>
  