import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import { createPinia } from 'pinia'


const app = createApp(App)

app.use(createPinia())
app.use(router).mount('#app')