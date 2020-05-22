import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/sub-vue/p1',
    name: 'Home',
    component: () => import(/* webpackChunkName: 'fail' */ '@/views/Home'),
  },
  {
    path: '/sub-vue/p2',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'fail' */ '@/views/About'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
