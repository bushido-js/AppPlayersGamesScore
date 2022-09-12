import Vuex from 'vuex';
import Vue from 'vue/dist/vue.esm.js';
import Player from '../lib/Player';
import Game from '../lib/Game';
import Tourney from '../lib/Tourney';


Vue.use(Vuex)

function findPlayerInfo(userId, array) {
    return array.find(player => player.id === userId);
};

export default new Vuex.Store({
    state:{
        players: [],
        games: [],
        tourneys:[],
        playersForTourney: [],
        tourneyId: null,
    },
    getters:{
        allPlayers(state){
            return state.players
        },
        currentTourney(state){
            let lastTourneyIndex = state.tourneys.length - 1
            return state.tourneys[lastTourneyIndex].tourneyGames
        }
    },
    mutations:{
        addPlayer(state, player){
            state.players.push(player);
        },
        addGame(state, obj){
            state.games.push(obj);
        },
        addTourney(state){
            state.tourneys.push(new Tourney(state.playersForTourney))
            const lastTourneyIndex = state.tourneys.length - 1
            state.tourneys[lastTourneyIndex].tourneyGamesOn()
            this.tourneyId = state.tourneys[lastTourneyIndex].id
        },
        
        addPlayerForTourneyList(state, playerId){
            if (findPlayerInfo(playerId, state.playersForTourney )) return;
            // создавать объект на остнове старого
            state.playersForTourney.push(findPlayerInfo(playerId, state.players));
        },

        removePlayerFromTourneyList(state, playerId) {
            let players = state.playersForTourney;
            let playerObj = findPlayerInfo(playerId, players);
            if (playerObj){
                players.splice(players.indexOf(playerObj), 1);
            }
        },
        getTourneyWinner(state){
            const lastTourneyIndex = state.tourneys.length - 1
            state.tourneys[lastTourneyIndex].getWinner()
        }
    },


    actions:{
        createPlayer(store, value) {
            return store.commit('addPlayer', new Player(value))
        },
        createGame (store, payload) { 
            return store.commit('addGame', new Game(payload[1], payload[2])); 
        },
        createTourney(store) {
           return store.commit('addTourney')
        },
        getTourneyWinner(store){
            return store.commit('getTourneyWinner')
        },
        addPlayerForTourneyList(store, id){
            return store.commit('addPlayerForTourneyList', id)
        },
        removePlayerFromTourneyList(store, id) {
            return store.commit('removePlayerFromTourneyList', id)
        }, 
    }
})