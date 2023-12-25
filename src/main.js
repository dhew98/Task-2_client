

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import router from './routes'

createApp(App).use(router).use(bootstrap).mount('#app')
