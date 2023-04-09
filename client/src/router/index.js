import Vue from 'vue'
import VueRouter from 'vue-router'
import {getAuth} from "firebase/auth"

import LoginView from "@/views/login-view.vue"
import HomeView from "@/views/home-view.vue";

Vue.use(VueRouter)

const routes = [
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
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
