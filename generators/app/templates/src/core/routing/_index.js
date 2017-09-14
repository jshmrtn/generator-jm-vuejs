import Vue from 'vue';
import VueRouter from 'vue-router';
import {
    routes,
} from 'core/routing/routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active',
});

export default router;
