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
		// Route Level code-splitting
		// This will generate a separate chunk which will be lazy-loaded when the route is visited.
    component: () => import('../views/SignIn.vue'),
  },
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL), // @TODO: Check
	routes
});

export default router
