import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//Set up
var router = new VueRouter({
    routes: []
});

//Add auth route guard
import authGuard from './authGuard.js';
router.beforeEach(authGuard);

//Export
export default router;
