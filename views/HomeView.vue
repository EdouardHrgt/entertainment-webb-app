<script setup>
import SmallCard from '../src/components/SmallCard.vue';
import Carousel from '../src/components/Carousel.vue';
import { computed } from 'vue';
import { useMoviesStore } from '../src/stores/movies';
import { storeToRefs } from 'pinia';

const store = useMoviesStore();

const videos = store.$state.films;
const trendings = store.getTrendings;
</script>

<template>
  <section class="carousel flex-align">
    <Carousel class="carousel-img" v-for="trend in trendings" :key="trend.id" :infos="trend" />
  </section>

  <section class="grid">
    <small-card v-for="video in videos" :key="video.id" :infos="video" />
  </section>
</template>

<style scoped>
.carousel {
  gap: 2.5rem;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  width: 100%;
  margin-top: 3.5rem;
  margin-left: 1rem;
  padding-bottom: 0.2rem;
  scroll-snap-type: inline mandatory;
}

.carousel-img {
  scroll-snap-align: start;
}

.grid {
  width: auto;
  max-width: 80rem;
  margin: 3.5rem 0 0 0;
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  grid-column-gap: 0rem;
  grid-row-gap: 1.7rem;
  justify-items: center;
}

@media screen and (max-width: 1445px) {
  .grid {
    max-width: 73.5rem;
  }
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

@media screen and (max-width: 768px) {
  .grid {
    grid-column-gap: 1.5rem;
    width: calc(100% - 1.5rem);
    margin-inline: auto;
  }
}

@media screen and (max-width: 560px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
