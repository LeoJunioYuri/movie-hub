<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from '@/components/MoviesNavbar.vue';
</script>

<template>
  <div id="app">
    <Navbar />
    <RouterView />
  </div>
</template>



<style lang="scss" scoped>
$primary-color: #007bff;
$background-color: #f8f9fa;
$text-color: #333;
$border-color: #ddd;

header {
  background-color: $background-color;
  border-bottom: 1px solid $border-color;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 100px;
    height: auto;
  }

  .nav-links {
    display: flex;
    gap: 1rem;
  }

  .nav-link {
    text-decoration: none;
    color: $text-color;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: $primary-color;
      color: #fff;
    }

    &.router-link-exact-active {
      background-color: $primary-color;
      color: #fff;
    }
  }
}

main {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
