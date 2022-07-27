import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App.vue'

new Vue({
  render: h => h(App)
}).$mount("#app")




// let arr = [
//   {id:1, name:'Oleg'},
//   {id:2, name:'Dima'},
//   {id:3, name:'Vasya'},
//   {id:4, name:'Ilya'},
//   {id:5, name:'Alan'},
//   {id:6, name:'Gelya'},
//   {id:7, name:'Bulat'},
//   {id:8, name:'Whater'},
//   {id:9, name:'Beef'},
//   {id:10, name:'Hello'},
// ]


let arr = [1, 0, 1]

let arr2 = [0, 1, 0]

function reverseArr (arr) {
  let arr3 = []
  for (let elem of arr){
    if (elem === 1){
      arr3.push(0)
    } else {
      arr3.push(1)
    }
  }
  return arr3;
}

console.log(reverseArr(arr));