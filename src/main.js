import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

//Routes imports
import HomeView from '../views/HomeView.vue';
import MoviesView from '../views/MoviesView.vue';
import TvSeriesView from '../views/TvSeriesView.vue';
import BookmarkedView from '../views/BookmarkedView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/Movies', name: 'Movies', component: MoviesView },
    { path: '/Tv-Series', name: 'TvSeries', component: TvSeriesView },
    { path: '/Bookmarked', name: 'Bookmarked', component: BookmarkedView },
  ],
});

createApp(App).use(router).use(createPinia()).mount('#app');
