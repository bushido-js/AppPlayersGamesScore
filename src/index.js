


// Код рабочий, для Vue(2)

import Vue from 'vue'
import App from './components/App.vue'


 new Vue({
  render: h => h(App)
}).$mount("#app")






// Рабочий код для Vue(3) версии
  // import { createApp } from 'vue'
  // import App from './components/App.vue'

  // export const eventBus = createApp(App)

  // createApp(App).mount('#app')
      