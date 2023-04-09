import {createRouter, createWebHistory} from 'vue-router'
import LoginView from "../views/login-view.vue";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: LoginView
        }
    ]
})