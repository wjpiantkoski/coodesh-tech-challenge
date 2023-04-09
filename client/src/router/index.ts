import {createRouter, createWebHistory} from 'vue-router'
import LoginView from "../views/login-view.vue";
import HomeView from "../views/home-view.vue";

export default createRouter({
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