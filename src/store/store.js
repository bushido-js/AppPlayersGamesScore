import Vuex from 'vuex'
import Vue from 'vue/dist/vue.esm.js'

// import players from './modules/players'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        players: [],
        games: [],

        playersForTourney: [],
        tourneys:[],

        indexPlayer: 0,
        indexGame: 0
    },
    getters:{
        PLAYERS: state => {
            return state.players
        },
        GAMES: state => {
            return state.games
        }
    },
    mutations:{
        createNewPlayer(state, obj){
            state.players.push(obj)
        },
        createNewGame(state, obj){
            if (obj !== undefined) {
                state.games.push(obj);
            }
        },
        addPlayerForTourneyList(state, playerId){
            function findPlayerInfo(userId, array) { // Тут и в нескольких местах, дублирую одну и туже функцию findPlayerInfo, так точно не верно, нужна альтернатива
                return array.find(player => player.id === userId);
            };
            if (findPlayerInfo(playerId, state.playersForTourney )) return;

            state.playersForTourney.push(findPlayerInfo(playerId, state.players));

        },
        createTourneyObject(state) {
            const k = 2;
            let arr = state.playersForTourney;
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    addGameTourney(arr[i].id, arr[j].id)
                }
            };
            function addGameTourney(firstPlayer, secondPlayer){
                state.tourneys.push(createGameObject(firstPlayer, secondPlayer));
                function createGameObject (firstPlayer, secondPlayer) {
                    const newGame = {
                        id: state.indexGame += 1,
                        firstUser: firstPlayer,
                        secondUser: secondPlayer,
                        rounds: [0],
                        isOverGame: false
                    }
                    if (newGame.firstUser !== '' &&
                        newGame.secondUser !== '' &&
                        newGame.firstUser !== newGame.secondUser
                        ){
                        return newGame 
                    }
            }
            }
        },
        removePlayerFromTourneyList(state, playerId) {
            function findPlayerInfo(userId, array) {
                return array.find(player => player.id === userId);
            };
            let playersForTourney = state.playersForTourney;
            let playerObj = findPlayerInfo(playerId, state.playersForTourney);
            if (playerObj){
                playersForTourney.splice(playersForTourney.indexOf(playerObj), 1);
            }
        }, 
        gameLogic (state, payload) {
            thirdRound (payload.rounds, payload.userId, payload.game, payload.playersArr, payload.gamesArr);
            secondRound (payload.rounds, payload.userId, payload.game, payload.playersArr, payload.gamesArr);
            firstRound (payload.rounds, payload.userId);  
            function firstRound (rounds, num) {
                if (rounds[0] === 0){ 
                    rounds.push(0);
                    Vue.set(rounds, 0, num);
                }
            };
            function secondRound (rounds, num, game, playersArr, gamesArr){
                if (rounds[1] === 0){
                    Vue.set(rounds, 1, num);
                    if (rounds[0] === rounds[1]){
                        addPoints(game, playersArr, gamesArr);
                    } else {
                        rounds.push(0);
                    }
                }
            };
            function thirdRound (rounds, num, game, playersArr, gamesArr){
                if (rounds[2] === 0){
                    Vue.set(rounds, 2, num);
                    if (rounds[0] === rounds[2]){
                        addPoints(game, playersArr, gamesArr);
                    }
                    if (rounds[1] === rounds[2]){
                        addPoints(game, playersArr, gamesArr);
                    }
                }
            };
            function addPoints(game, playersArr, gamesArr){
                const firstId = game.firstUser;
                const secondId = game.secondUser;
                const arrPoints = getArrRoundPoints(game.id, gamesArr);
    
                const firstPlayerCountWinRounds = takeCountWinRounds(arrPoints, firstId);
                const firstPlayerCountLossRounds = takeCountLossRounds(arrPoints, firstId);
                const secondPlayerCountWinRounds = takeCountWinRounds(arrPoints, secondId);
                const secondPlayerCountLossRounds = takeCountLossRounds(arrPoints, secondId);
    
                addPointsForPlayer(firstPlayerCountWinRounds, firstPlayerCountLossRounds, firstId, playersArr);
                addPointsForPlayer(secondPlayerCountWinRounds, secondPlayerCountLossRounds, secondId, playersArr);
                game.isOverGame = true
            };
            function addPointsForPlayer(countRoundWon, countRoundLoss, userId, playersArr) {
                const playerInfo = findPlayerInfo(userId, playersArr);
                playerInfo.lossRound += countRoundLoss;
                playerInfo.winRound += countRoundWon;
                playerInfo.winGame += countRoundWon >= 2 ? 1 : 0;
            };
            function findPlayerInfo(userId, playersArr) {
                return playersArr.find(player => player.id === userId);
            };
            function takeCountWinRounds(arr, userId) {
                return arr.reduce((wonRounds, item) => 
                    wonRounds += userId === item 
                        ? 1 
                        : 0 
                    , 0);
            };
            function takeCountLossRounds(arr, userId) {
                return arr.reduce((lossRounds, item) => 
                    lossRounds += userId !== item 
                        ? 1 
                        : 0 
                    , 0);
            };
            function getArrRoundPoints(gameId, gamesArr){
                return gamesArr.reduce((arr, game) => {
                    if (game.id === gameId){
                        arr = game.rounds;
                    }
                    return arr;
                }, []);
            };
        },
    },


    actions:{
        createPlayerObject(store, value) {
            let newPlayer = {};
            if (value.trim()) {
                newPlayer = {
                    id: store.state.indexPlayer += 1,
                    name: value,
                    winRound: 0,
                    lossRound: 0, 
                    winGame: 0 
                }
            }
            if (Object.keys(newPlayer).length) {
                store.commit('createNewPlayer', newPlayer)
            }
        },
        createGameObject (store, {1:firstPlayer, 2:secondPlayer}) {
            const newGame = {
                id: store.state.indexGame += 1,
                firstUser: firstPlayer,
                secondUser: secondPlayer,
                rounds: [0],
                isOverGame: false
            }
            if (newGame.firstUser !== '' &&
                newGame.secondUser !== '' &&
                newGame.firstUser !== newGame.secondUser
                ){
                return store.commit('createNewGame', newGame); 
            }
        },
        createTourneyObject(store) {
           return store.commit('createTourneyObject')
        },
        addPlayerForTourneyList(store, id){
            return store.commit('addPlayerForTourneyList', id)
        },
        removePlayerFromTourneyList(store, id) {
            return store.commit('removePlayerFromTourneyList', id)
        },       
        playGameTwoPlayers(store, {game, userId}) {
            let rounds = game.rounds;
            return store.commit('gameLogic', {rounds, userId, game, playersArr:store.state.players, gamesArr:store.state.games});
            
        },
        playGameTourneys(store, {game, userId}) {
            let rounds = game.rounds;
            return store.commit('gameLogic', {rounds, userId, game, playersArr:store.state.playersForTourney, gamesArr:store.state.tourneys});
        },
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