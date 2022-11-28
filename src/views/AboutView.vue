<template>
  <div>
    <h1>About Page View</h1>
    <div class="store-actions">
      <div class="state">
        <h1>NOW: {{ counterStore.count || 0 }}</h1>
      </div>
      <button @click="counterStore.accumulate">Accumulate</button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/store';

const counterStore = useCounterStore();
</script>

<style lang="scss" scoped></style>
