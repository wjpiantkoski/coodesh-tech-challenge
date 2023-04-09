import {getAuth} from "firebase/auth";
import {createRouter, createWebHistory} from 'vue-router'

import LoginView from "../views/login-view.vue";
import HomeView from "../views/home-view.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginView
        }
    ]
})

router.beforeEach((to, from, next) => {
    const currentUser = getAuth().currentUser
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (requiresAuth && !currentUser) {
        return next({path: '/login'})
    }

    next()
})

export default router