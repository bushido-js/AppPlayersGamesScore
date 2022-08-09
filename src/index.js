import Vue from 'vue/dist/vue.esm.js'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store/storeVuex'
import App from './components/App.vue'

new Vue({
    store,
    render: h => h(App)
}).$mount("#app")
