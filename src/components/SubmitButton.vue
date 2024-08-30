<template>
  <button class="btn" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
</script>

<style scoped>
.btn {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
