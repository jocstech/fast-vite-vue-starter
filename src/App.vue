<template>
  <RouterView />
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <span> | </span>
    <RouterLink to="/about">About</RouterLink>
    <span> | </span>
    <RouterLink to="/login">Login</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped></style>
