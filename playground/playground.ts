import { createApp } from 'vue'
import Playground from './Playground.vue'
import { plugin, defaultConfig } from '@formkit/vue'

import 'uno.css'

createApp(Playground).use(plugin, defaultConfig).mount('#app')
