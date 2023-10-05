<script setup>
import NavBar from './components/NavBar.vue';
import SearchBar from './components/SearchBar.vue';
</script>

<template>
  <div class="page-container flex">
    <header class="flex">
      <NavBar />
    </header>
    <main>
      <SearchBar />
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<style>
:root {
  --clr-white: white;
  --clr-trans-white: rgba(255, 255, 255, 0.5);
  --clr-red: hsl(0, 97%, 63%);
  --clr-blue: hsl(223, 23%, 46%);
  --clr-dark-blue: hsl(223, 36%, 14%);
  --clr-black: hsl(223, 30%, 9%);
  --clr-trans-black: hsla(223, 30%, 9%, 0.5);

  --max-width: 1440px;
  --h1-size: 32px;
  --h2-size: 24px;
  --h3-size: 24px;
  --h4-size: 18px;
  --body-m-size: 15px;
  --body-s-size: 13px;
  --padding: 2rem;

  --small-card-width: 17.5rem;
  --small-card-height: 10.875rem;
  --carousel-card-width: 29.375rem;
  --carousel-card-height: 14.375rem;
}
* {
  padding: 0;
  margin: 0;
  font: inherit;
  box-sizing: border-box;
  font-family: sans-serif;
  background-repeat: no-repeat;
  font-family: 'Outfit', sans-serif;
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: var(--clr-dark-blue);
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  height: 10px;
  width: 10px;
}
*::-webkit-scrollbar-track {
  border-radius: 3px;
  background-color: var(--clr-dark-blue);
}

*::-webkit-scrollbar-track:hover {
  background-color: var(--clr-dark-blue);
}

*::-webkit-scrollbar-track:active {
  background-color: var(--clr-red);
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: var(--clr-blue);
}

*::-webkit-scrollbar-thumb:hover {
  background-color: var(--clr-blue);
}

*::-webkit-scrollbar-thumb:active {
  background-color: var(--clr-blue);
}

body {
  background-color: var(--clr-black);
}

.page-container {
  width: 100%;
  max-width: var(--max-width);
  margin-inline: auto;
}

main {
  width: 100%;
}

h1 {
  font-size: var(--h1-size);
  color: var(--clr-white);
  margin-block: 1rem;
  padding-inline: 1rem;
}
h2 {
  font-size: var(--h2-size);
}
h1,
h2,
p {
  font-weight: 300;
}
h3 {
  font-size: var(--h3-size);
}
h4 {
  font-size: var(--h4-size);
}
h3,
h4 {
  font-weight: 400;
}
.body-m {
  font-size: var(--body-m-size);
}
.body-s {
  font-size: var(--body-s-size);
}
.flex {
  display: flex;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.flex-align {
  display: flex;
  align-items: center;
}
.radius {
  border-radius: 20px;
}

.large {
  max-width: var(--max-width);
  margin: auto;
}
img {
  max-width: 100%;
  display: block;
  height: auto;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: var(--clr-white);
}
button {
  display: block;
  outline: none;
  border: none;
  cursor: pointer;
}
.btn-1 {
  width: 336px;
  height: 48px;
  background-color: var(--clr-red);
}
.btn-1:hover {
  background-color: var(--clr-white);
}
a,
button,
svg {
  transition: all 0.4s linear;
}

@keyframes opak {
  0% {
    transform: translateY(-5rem);
  }
  100% {
    transform: translateY(0);
  }
}

@media screen and (max-width: 1440px) {
  :root {
    --max-width: 100%;
  }
}

@media screen and (max-width: 1024px) {
  :root {
    --small-card-width: 13.75rem;
    --small-card-height: 8.75rem;
  }
  .page-container {
    flex-direction: column;
  }
}
@media screen and (max-width: 768px) {
  :root {
    --small-card-width: 1fr;
    --small-card-height: auto;
    --carousel-card-width: 15rem;
    --carousel-card-height: 8.75rem;
  }
}
</style>
