import './styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { App } from './ui/index.ts'
import { router } from './routes/index.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
