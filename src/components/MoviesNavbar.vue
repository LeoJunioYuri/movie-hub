<template>
  <nav>
    <div class="nav-content">
      <RouterLink to="/" class="nav-logo">MovieHub</RouterLink>
      <div class="nav-links">
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
        <RouterLink to="/favorites" exact-active-class="active">Favoritos</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  z-index: 1000;
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  transition: background-color 0.3s, color 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
  background-color: #555;
  color: #fff;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-links {
    width: 100%;
    justify-content: center;
  }
}

body {
  margin-top: 3.5rem;
}
</style>
