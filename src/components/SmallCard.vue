<script setup>
import { ref } from 'vue';
const isBookmarked = ref(false);

function getImageUrl(name) {
  return new URL(`../assets/thumbnails/${name}`, import.meta.url).href;
}

const props = defineProps(['infos']);
const image = props.infos.thumbnail.regular.large;

</script>

<template>
  <div class="card">
    <div class="card-img">
      <img :src="getImageUrl(image)" alt="#" />
      <div class="hover-content flex-center">
        <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z"
            fill="#FFF"
          />
        </svg>
        <p>Play</p>
      </div>

      <button class="icon-bg" @click="isBookmarked = !isBookmarked">
        <div class="icon-container" :class="{ checked: isBookmarked }">
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" class="bookmark-icon unchecked" v-show="!isBookmarked">
            <path
              d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
              stroke="#FFF"
              stroke-width="1.5"
              fill="none"
            />
          </svg>
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg" class="bookmark-icon checked" v-show="isBookmarked">
            <path
              d="M10.61 0c.14 0 .273.028.4.083a1.03 1.03 0 0 1 .657.953v11.928a1.03 1.03 0 0 1-.656.953c-.116.05-.25.074-.402.074-.291 0-.543-.099-.756-.296L5.833 9.77l-4.02 3.924c-.218.203-.47.305-.756.305a.995.995 0 0 1-.4-.083A1.03 1.03 0 0 1 0 12.964V1.036A1.03 1.03 0 0 1 .656.083.995.995 0 0 1 1.057 0h9.552Z"
              stroke="black"
              fill="white"
              stroke-linecap="round"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
    <div class="card-txt">
      <ul class="card-infos flex">
        <li id="year">{{ props.infos.year }}</li>
        <li>|</li>
        <li class="flex">
          <img src="../assets/icon-category-movie.svg" alt="" v-if="props.infos.category === 'Movie'" />
          <img src="../assets/icon-category-tv.svg" alt="" v-if="props.infos.category === 'TV Series'" />
          {{ props.infos.category }}
        </li>
        <li>|</li>
        <li>{{ props.infos.rating }}</li>
      </ul>
      <h3>{{ props.infos.title }}</h3>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: var(--small-card-width);
  border-radius: 10px 10px 0 0;
  cursor: pointer;
}

.card-img {
  background-position: center;
  background-size: cover;
  width: inherit;
  height: var(--small-card-height);
  margin-bottom: 0.5rem;
  position: relative;
}

.card-img:hover .hover-content {
  opacity: 1;
}

.hover-content {
  position: absolute;
  inset: 0;
  background-color: var(--clr-trans-black);
  border-radius: 10px;
  gap: 0.6rem;
  opacity: 0;
  transition: 0.4s ease-in-out;
}

.hover-content p {
  font-size: var(--h4-size);
  color: var(--clr-white);
  font-weight: 500;
  letter-spacing: 0.5px;
}

.card-img img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.icon-bg {
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  background: transparent;
  z-index: 10;
}

.icon-container {
  background-color: var(--clr-trans-black);
  border-radius: 50%;
  width: 2.2rem;
  aspect-ratio: 1/1;
  display: grid;
  place-content: center;
}
.checked {
  background-color: var(--clr-trans-white);
}

h3 {
  font-size: var(--h4-size);
  color: var(--clr-white);
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-top: 0.2rem;
}

.card-infos {
  gap: 0.4rem;
}

.card-infos li {
  font-size: var(--body-s-size);
  color: var(--clr-white);
  opacity: 0.6;
  font-weight: 300;
}

.card-infos li img {
  margin: 0 0.3rem 0 0.2rem;
}

@media screen and (max-width: 768px) {
}
</style>
