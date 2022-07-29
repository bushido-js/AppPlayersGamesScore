import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App.vue'

new Vue({
  render: h => h(App)
}).$mount("#app")


var arr1 = [],
    arr2 = [ 1],
    res = arr1.filter(item => !arr2.includes(item));
console.log(res);
console.log(Boolean(!arr1.length));

console.log(arr2.length);