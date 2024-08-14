import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/signin',
    name: 'SignIn',
		// Lazy load for performance
    component: () => import('../views/SignIn.vue'),
  },
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL), // @TODO: Check
	routes
});

export default router
