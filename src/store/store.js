import Vuex from 'vuex'
import Vue from 'vue/dist/vue.esm.js'

// import players from './modules/players'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        players: []
    },
    getters:{
        
    },
    mutations:{
       createNewPlayer(state, obj){
            state.players.push(obj)
       }
    },
    actions:{
        createNewPlayer(store, obj){
            store.commit('createNewPlayer', obj)
       }
    }
})



// testField
    // export default new Vuex.Store({
    //     state:{
    //         totalTvCount: 10,
    //         isLarryHappy: true,
    //         isJennyHappy: true
    //     },
    //     getters:{
    //         // Here we will create a getter
    //         happyStuff(state){
    //             return state.isJennyHappy && state.isLarryHappy
    //         }
    //     },
    //     mutations:{
    //         // Here we will create Jenny
    //         removeTv(state, amount) {
    //             state.totalTvCount -= amount
    //         },
    //         addTv(state, amount) {
    //             state.totalTvCount += amount
    //         }
    //     },
    //     actions:{
    //         // Here we will create Larry
    //         firstDoWithTv(context, amount) {
    //             if(context.state.totalTvCount >= amount){
    //                 context.commit('removeTv', amount)
    //             }
    //         },
    //         secondDoWithTv(context, amount) {
    //             if(context.state.totalTvCount >= amount){
    //                 context.commit('addTv', amount)
    //             }
    //         }
    //     }
    // })