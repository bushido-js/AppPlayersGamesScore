import Vue from 'vue/dist/vue.esm.js'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store/store.js'
import App from './components/App.vue'

new Vue({
    store: store,
    render: h => h(App)
}).$mount("#app")

var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

let length = myFish.length
myFish.splice(myFish.length, 0, {name:'Hello'})
console.log('myFish', myFish);
console.log('length', length);

