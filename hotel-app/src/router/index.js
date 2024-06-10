import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import EntityList from '../components/EntityList.vue';
import EntityForm from '../components/EntityForm.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/:entity', name: 'EntityList', component: EntityList, props: true },
  { path: '/:entity/new', name: 'EntityForm', component: EntityForm, props: true },
  { path: '/:entity/:id', name: 'EntityForm', component: EntityForm, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
