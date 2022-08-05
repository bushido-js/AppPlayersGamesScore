import Vue from 'vue/dist/vue.esm.js'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App.vue'

new Vue({
  render: h => h(App)
}).$mount("#app")




function combine2(array, k) {
    const n = array.length - 1; // максимальный индекс массива элементов
    const m = k - 1; // максимальный индекс массива-маски сочетания
    const finds = []; // массив всех возможных осчетаний
    const mask = []; // маска сочетания
    let finish = false;
    for (let i = 0; i < k; i++) {mask.push(array[i]); console.log('mask1', mask);} ;
    while (!finish) {
      finish = true;
      const str = mask.join('');
      if (!finds.includes(str)) finds.push(str); // записываем сочетание в массив
      console.log('finds', finds);
      for (let i = 0; i < k; i++) {
        if (mask[m - i] != array[n - i]) {
            console.log('mask2',  mask);
          // проверяем, остались ли еще сочетания
          finish = false;
          let p = array.indexOf(mask[m - i]);
        //   console.log('m', m - i);
        //   console.log('p', p);
          mask[m - i] = array[++p]; // изменяем маску, начиная с последнего элемента
          for (let j = m - i + 1; j < k; j++) {
            mask[j] = array[++p];
            console.log('mask3', mask);
          }
          break;
        }
      }
    }
    return finds;
  }

  
  let arr = [
      {id:1, name:'Oleg', rounds:[1, 2, 1]},
      {id:2, name:'Vlad', rounds:[1, 2, 1]},
      {id:3, name:'Anton', rounds:[1, 2, 2]},
      {id:4, name:'Misha', rounds:[1, 2, 1]},
      {id:5, name:'Ilya', rounds:[1, 2, 1]},
    ]
    let arr3 = [] 
    arr.forEach((item) => {
        arr3.push(item.id)
    })
// console.log(arr3);
// let arr2 = [1, 2, 3, 4, 5]
//   const combinations = combine2(arr, k)
const k = 2
console.log(combine2(arr3, k));
//   console.log(combinations);
let her = 1
console.log('вычесления', ++her);

    // console.log('mask', mask);







// const arrSize = 2;
// const sliceArr = [];
// for (let i = 0; i < arr.length; i += arrSize){
//     sliceArr.push(arr.slice(i, i + arrSize))
//     console.log(sliceArr);
// }