import { createApp } from 'vue'
import {createPinia} from 'pinia'
import './style.css'
import router from './router'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config'


const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(plugin, defaultConfig(config))
app.mount('#app')
