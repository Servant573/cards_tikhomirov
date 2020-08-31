import Vue from 'vue';
import VueRouter from 'vue-router';
import vPerson from '../components/v-person.vue';
import vCatalog from '../components/v-catalog.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: vCatalog,
    name: 'catalog'
  },
  {
    path: '/:id',
    component: vPerson,
    name: 'person',
    props: true
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;