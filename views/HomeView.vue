<script setup>
import SmallCard from '../src/components/SmallCard.vue';
</script>

<template>
  <section class="grid">
    <small-card />
    <small-card />
    <small-card />
    <small-card />

    <small-card />
    <small-card />
    <small-card />
    <small-card />
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

@media screen and (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
