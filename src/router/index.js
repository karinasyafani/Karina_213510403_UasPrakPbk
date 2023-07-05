import { createRouter, createWebHistory } from 'vue-router';

import WCuaca from '../components/MyCuaca.vue';
import WLokasi from '../components/MyLokasi.vue';
import WGame from '../components/MyGame.vue';
import WStopwatch from '../components/MyStopwatch.vue';

const routes = [
  { path: '/', component: WCuaca },
  { path: '/wlokasi', component: WLokasi },
  { path: '/wgame', component: WGame},
  { path: '/wstopwatch', component: WStopwatch},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;