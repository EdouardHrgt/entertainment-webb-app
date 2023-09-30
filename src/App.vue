<script setup>
import NavBar from './components/NavBar.vue';
import SearchBar from './components/SearchBar.vue';
</script>

<template>
  <div class="page-container flex">
    <header class="flex">
      <NavBar />
      <!-- <SearchBar /> -->
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
:root {
  --clr-white: white;
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
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  background-repeat: no-repeat;
  font-family: 'Outfit', sans-serif;
}

body {
  background-color: var(--clr-black);
  width: 100%;
}

main {
  width: 100%;
}

.page-container {
  border: 3px solid rgb(1, 77, 138);
}

h1 {
  font-size: var(--h1-size);
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
@media screen and (max-width: 1024px) {
  .page-container {
    flex-direction: column;
  }
}
@media screen and (max-width: 768px) {
}
</style>
