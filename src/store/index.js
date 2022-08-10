import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'

// import players from './modules/players'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    },
    getters:{
        count(state){
            return state.count
        }
    }
  })

  export default store;