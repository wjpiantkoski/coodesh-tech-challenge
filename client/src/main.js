import Vue from 'vue'
import {getAuth} from 'firebase/auth'
import {initializeApp} from 'firebase/app'

import App from './App.vue'

import router from './router'
import vuetify from './plugins/vuetify'
import firebaseConfig from './plugins/firebaseConfig'

import '@babel/polyfill'
import '@mdi/font/css/materialdesignicons.css'
import 'roboto-fontface/css/roboto/roboto-fontface.css'

Vue.config.productionTip = false

let app

console.log(firebaseConfig)

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)

auth.onAuthStateChanged(async () => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }
})



