import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// при открытии index.html запускается main.js
const app = createApp(App)

app.use(router)

app.mount('#app')  // в блок  с id=app добавится вся наша верстка 
