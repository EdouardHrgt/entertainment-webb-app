<script setup>
import { useMoviesStore } from '../../src/stores/movies';
import { ref } from 'vue';

const input = ref('');
const store = useMoviesStore();

const searchAMovie = (title) => {
  store.searching = store.films.find((film) => film.title == title);
};
</script>

<template>
  <form novalidate>
    <div class="flex-align">
      <label for="search" hidden>Search for a movie</label>
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
          fill="#FFF"
        />
      </svg>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for movies or TV series..."
        v-model="input"
        @input="searchAMovie(input)"
      />
    </div>
  </form>
</template>

<style scoped>
form {
  height: fit-content;
  margin: 3.5rem 0 0 0;
}
form > div {
  gap: 2rem;
}
input {
  background: transparent;
  border: none;
  outline: none;
  display: inline-block;
  width: 100%;
  max-width: 58rem;
  padding: 1rem 1rem 1rem 0;
  font-size: var(--h2-size);
  color: var(--clr-white);
}
input::placeholder {
  color: var(--clr-blue);
}
input:focus {
  border-bottom: 2px solid var(--clr-blue);
  margin-bottom: -2px;
}
@media screen and (max-width: 1300px) {
  input {
    max-width: 51rem;
  }
}

@media screen and (max-width: 1024px) {
  form {
    margin: 0 1rem 0 1rem;
  }
  input {
    max-width: 50rem;
  }
}

@media screen and (max-width: 768px) {
  form > div {
    gap: 1rem;
  }
  input {
    font-size: var(--h4-size);
  }
}
</style>
