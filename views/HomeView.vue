<script setup>
import SmallCard from '../src/components/SmallCard.vue';
import { useMoviesStore } from '../src/stores/movies';

const store = useMoviesStore();
const videos = store.$state;
</script>

<template>
  <section class="grid">
    <small-card v-for="video in videos" :key="video.id" :infos="video" />
  </section>
</template>

<style scoped>
.grid {
  width: auto;
  max-width: 80rem;
  margin: 2rem 0 0 0;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 0rem;
  grid-row-gap: 1rem;
  justify-items: center;
}

@media screen and (max-width: 1350px) {
  .grid {
    max-width: 90%;
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (max-width: 1165px) {
  .grid {
    max-width: 100%;
  }
}

@media screen and (max-width: 560px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
