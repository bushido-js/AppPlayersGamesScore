import Vuex from 'vuex';
import Vue from 'vue/dist/vue.esm.js';
import Player from '../lib/Player';
import Game from '../lib/Game';


Vue.use(Vuex)

// Ниже функции которые используются несколько раз, и чтобы их не дублировать, я их вынес в основной файл, не знаю на сколько это верно, но работает.
// // GlobalFunctions START

// Переменная для id всех игр, чтобы каждая игра и обычная, и турнирная имела свой уникальный ID

// 

// function gameLogic (rounds, userId, game, playersArr, gamesArr) {
    // thirdRound (rounds, userId, game, playersArr, gamesArr);
    // secondRound (rounds, userId, game, playersArr, gamesArr);
    // firstRound (rounds, userId);  
    // function firstRound (rounds, num) {
    //     if (rounds[0] === 0){ 
    //         rounds.push(0);
    //         Vue.set(rounds, 0, num);
    //     }
    // };
    // function secondRound (rounds, num, game, playersArr, gamesArr){
    //     if (rounds[1] === 0){
    //         Vue.set(rounds, 1, num);
    //         if (rounds[0] === rounds[1]){
    //             addPoints(game, playersArr, gamesArr);
    //         } else {
    //             rounds.push(0);
    //         }
    //     }
    // };
    // function thirdRound (rounds, num, game, playersArr, gamesArr){
    //     if (rounds[2] === 0){
    //         Vue.set(rounds, 2, num);
    //         if (rounds[0] === rounds[2]){
    //             addPoints(game, playersArr, gamesArr);
    //         }
    //         if (rounds[1] === rounds[2]){
    //             addPoints(game, playersArr, gamesArr);
    //         }
    //     }
    // };
    // function addPoints(game, playersArr, gamesArr){
    //     const firstId = game.firstUser;
    //     const secondId = game.secondUser;
    //     const arrPoints = getArrRoundPoints(game.id, gamesArr);

    //     // const firstPlayerCountWinRounds = takeCountWinRounds(arrPoints, firstId);
    //     // const firstPlayerCountLossRounds = takeCountLossRounds(arrPoints, firstId);
    //     // const secondPlayerCountWinRounds = takeCountWinRounds(arrPoints, secondId);
    //     // const secondPlayerCountLossRounds = takeCountLossRounds(arrPoints, secondId);

    //     // addPointsForPlayer(firstPlayerCountWinRounds, firstPlayerCountLossRounds, firstId, playersArr);
    //     // addPointsForPlayer(secondPlayerCountWinRounds, secondPlayerCountLossRounds, secondId, playersArr);
    //     const firstPlayer = findPlayerInfo(firstId, playersArr);
    //     firstPlayer.addPoints(firstPlayerCountWinRounds, firstPlayerCountLossRounds);
    //     const secondPlayer = findPlayerInfo(secondId, playersArr);
    //     secondPlayer.addPoints(secondPlayerCountWinRounds, secondPlayerCountLossRounds);
    //     game.endGame()
    //     console.log('game.isOverGame', game.isOverGame);
    // };
    // function addPointsForPlayer(countRoundWon, countRoundLoss, userId, playersArr) {
    //     const playerInfo = findPlayerInfo(userId, playersArr);
    //     playerInfo.lossRound += countRoundLoss;
    //     playerInfo.winRound += countRoundWon;
    //     playerInfo.winGame += countRoundWon >= 2 ? 1 : 0;
    // };
    // function takeCountWinRounds(arr, userId) {
    //     return arr.reduce((wonRounds, item) => 
    //         wonRounds += userId === item 
    //             ? 1 
    //             : 0 
    //         , 0);
    // };
    // function takeCountLossRounds(arr, userId) {
    //     return arr.reduce((lossRounds, item) => 
    //         lossRounds += userId !== item 
    //             ? 1 
    //             : 0 
    //         , 0);
    // };
    // function getArrRoundPoints(gameId, gamesArr){
    //     return gamesArr.reduce((arr, game) => {
    //         if (game.id === gameId){
    //             arr = game.rounds;
    //         }
    //         return arr;
    //     }, []);
    // };
// };
function findPlayerInfo(userId, array) {
    return array.find(player => player.id === userId);
};

// добавить 3 параметр id, передавать значение из стора. Убрать idGame
// // GlobalFunctions END

export default new Vuex.Store({
    state:{
        players: [],
        games: [],
        tourneys:[],

        playersForTourney: [],
        playersForExtraGames: [],

        indexTourney: 0,
    },
    getters:{
        allPlayers(state){
            return state.players
        },
        currentTourney (state){
            return state.tourneys[state.indexTourney - 1]
        }
    },
    mutations:{
        addPlayer(state, player){
            state.players.push(player);
            console.log('tourneys', state.tourneys);
        },
        addGame(state, obj){
            // state.games.push(obj);
            console.log('games', state.games);
            state.games.splice(state.games.length, 0, obj)
            
            // Vue.set(state.games, 1, obj)
        },
        addTourney(state, arr){
            
        },
        
        addPlayerForTourneyList(state, playerId){
            if (findPlayerInfo(playerId, state.playersForTourney )) return;
            // создавать объект на остнове старого
            state.playersForTourney.push(findPlayerInfo(playerId, state.players));
        },
        removePlayerFromTourneyList(state, playerId) {
            let playersForTourney = state.playersForTourney;
            let playerObj = findPlayerInfo(playerId, playersForTourney);
            if (playerObj){
                playersForTourney.splice(playersForTourney.indexOf(playerObj), 1);
            }
        }, 
        createTourneyObjectForGames(state) {
            state.indexTourney += 1;
            state.tourneys.push([]);
            
            let arr = state.playersForTourney;
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    addGameTourney(arr[i], arr[j])
                }
            };

            function addGameTourney(firstPlayer, secondPlayer){
                state.tourneys[state.indexTourney - 1].push(new Game(firstPlayer, secondPlayer));
            }
            
            console.log('tourneys',  state.tourneys);
            console.log('playersForTourney', state.playersForTourney);

        },
        createExtraGames(state, payload){   
            payload.forEach(function(item){
                let playerId = Number(item);
                state.playersForTourney.forEach(function(elem){
                    if(elem.id === playerId){
                        state.playersForExtraGames.push(elem);
                    }
                })
            })

            let arr = state.playersForExtraGames;
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    addGameTourney(arr[i], arr[j])
                }
            };

            function addGameTourney(firstPlayer, secondPlayer){
                state.tourneys[state.indexTourney - 1].push(new Game(firstPlayer, secondPlayer));
            }
            state.playersForExtraGames = [];
        },
        clearListTourney(state){
            state.playersForTourney = []
        },
        // addExtraGame(state, payload){
        //     state.tourneys[state.indexTourney - 1].push(createGameObject(payload.firstPlayer, payload.secondPlayer))
        // },
        // playGameTwoPlayers(state, payload){
        //     return gameLogic(payload.rounds, payload.userId, payload.game, state.players, state.games)
        // },
        playGameTourneys(state, payload){
            return gameLogic(payload.rounds, payload.userId, payload.game, state.playersForTourney, state.tourneys[state.indexTourney - 1])
        }
    },


    actions:{
        createPlayer(store, value) {
            return store.commit('addPlayer', new Player(value))
        },
        createGame (store, payload) { 
            return store.commit('addGame', new Game(payload[1], payload[2])); 
        },
// Tourney START
        createTourneyObjectForGames(store) {
           return store.commit('createTourneyObjectForGames')
        },
        createExtraGames(store, payload) {
            return store.commit('createExtraGames', payload)
        },
        clearListTourney(store){
            return  store.commit('clearListTourney')
        },



        // addExtraGame(store, {firstPlayer, secondPlayer}){
        //     return store.commit('addExtraGame', {firstPlayer, secondPlayer})
        // },
        addPlayerForTourneyList(store, id){
            return store.commit('addPlayerForTourneyList', id)
        },
        removePlayerFromTourneyList(store, id) {
            return store.commit('removePlayerFromTourneyList', id)
        },
        areTheGamesOverPrice(store, id) {
           return console.log('id', id); 
        },     

        // playGameTwoPlayers(store, {game, userId}) {
        //     let rounds = game.rounds;
        //     console.log('rounds', rounds);
        //     return store.commit('playGameTwoPlayers', {rounds, userId, game});  
        // },
        playGameTourneys(store, {game, userId}) {
            let rounds = game.rounds;    
            return store.commit('playGameTourneys', {rounds, userId, game});
        },
// Tourney END
    }
})