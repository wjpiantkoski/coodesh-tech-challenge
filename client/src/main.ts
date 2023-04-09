import {createApp, App as VueApp} from 'vue'
import {getAuth} from 'firebase/auth'

import './style.css'
import App from './App.vue'

import router from "./router";
import vuetify from "./plugins/vuetify";
import {firebaseApp} from "./plugins/firebaseApp"

let app: VueApp

const auth = getAuth(firebaseApp)

auth.onAuthStateChanged(async () => {
    if (!app) {
        app = createApp(App);

        app.use(vuetify)
        app.use(router)

        app.mount("#app");
    }
})
