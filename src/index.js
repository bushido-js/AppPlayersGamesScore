import Vue from 'vue/dist/vue.esm.js'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App.vue'

new Vue({
  render: h => h(App)
}).$mount("#app")




let arr = [
    {id:1, name:'Oleg', rounds:[1, 2, 1]},
    {id:2, name:'Vlad', rounds:[1, 2, 1]},
    {id:3, name:'Anton', rounds:[1, 2, 2]},
    {id:4, name:'Misha', rounds:[1, 2, 1]},
    {id:5, name:'Ilya', rounds:[1, 2, 1]},
]

console.log(arr[0].id);






