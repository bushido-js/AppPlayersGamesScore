export default{
    state:{
        players: [
            {
                id: 3,
                name: 'Oleg',
                winRound: 0,
                lossRound: 0, 
                winGame: 0 
            }
        ]
    },
    mutations:{},
    actions:{},
    getters:{
        players(state){
            return state.players  
        }
    }
}