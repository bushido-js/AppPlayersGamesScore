<template>
    <div class="container mt-2">
        <AddNewPlayer 
            :players="players"
            @addNewPlayer="createPlayerObject"
        />
    <hr size="5" class="col-6">
        <CreateGame 
            :players="players"
            :games="games"
            @createGameButtonClicked="createGameObject"
            @sendInfoGame="playGame"
        />
    </div>
</template>

<script>
import Vue from 'vue';
export default {
      
    data() {
        return {
            players: [],
            games: [],

            index: 0,
            count: 0
        }
    },
    methods: {
        createPlayerObject(value) {
            let newPlayer = {};
            if (value.trim()) {
                newPlayer = {
                    id: this.index += 1,
                    name: value,
                    winRound: 0,
                    lossRound: 0, 
                    winGame: 0 
                }
            }
            if (Object.keys(newPlayer).length) {
                this.addPlayer (newPlayer);
            }
        },
        addPlayer(obj) {
            this.players.push(obj);
        },

//-//

        createGameObject (firstSelected, secondSelected) {
            const newGame = {
                id: this.count += 1,
                firstUser: firstSelected,
                secondUser: secondSelected,
                rounds: [0]
            }
            if (newGame.firstUser !== '' &&
                newGame.secondUser !== '' &&
                newGame.firstUser !== newGame.secondUser
                ) {
                this.addGame (newGame)
            }
        },
        addGame(obj) {
            this.games.push(obj);
        },

//-//

        playGame(game, userId) {
            let rounds = game.rounds;
            this.gameLogic(rounds, userId, game);
        },
        gameLogic (rounds, userId, game) {
            this.thirdRound (rounds, userId, game);
            this.secondRound (rounds, userId, game);
            this.firstRound (rounds, userId);  
        },
        firstRound (rounds, num) {
            if (rounds[0] === 0){ 
                rounds.push(0)
                Vue.set(rounds, 0, num)
            }
        },
        secondRound (rounds, num, game){
            if (rounds[1] === 0){
                Vue.set(rounds, 1, num)
                if (rounds[0] === rounds[1]){
                    this.addPoints(game)
                } else {
                    rounds.push(0)
                }
            }
        },
        thirdRound (rounds, num, game){
            if (rounds[2] === 0){
                Vue.set(rounds, 2, num)
                if (rounds[0] === rounds[2]){
                    this.addPoints(game)
                }
                if (rounds[1] === rounds[2]){
                    this.addPoints(game)
                }
            }
        },

//*//

        addPoints(game){
            const firstId = game.firstUser;
            const secondId = game.secondUser;
            const arrPoints = this.getArrRoundPoints(game.id);

            const firstPlayerCountWinRounds = this.takeCountWinRounds(arrPoints, firstId);
            const secondPlayerCountWinRounds = this.takeCountWinRounds(arrPoints, secondId);

            this.addPointsForPlayer(firstPlayerCountWinRounds, firstId, arrPoints)
            this.addPointsForPlayer(secondPlayerCountWinRounds, secondId, arrPoints)
        },
        addPointsForPlayer(countRoundWon, userId, gameRounds) {
            const playerInfo = this.findPlayerInfo(userId);
            if (countRoundWon === 0){
                playerInfo.lossRound += 2
            }
            if (countRoundWon === 1){
                playerInfo.lossRound += 2
                playerInfo.winRound += 1
            }
            if (countRoundWon === 2 && gameRounds.length === 3){
                playerInfo.winRound += 2
                playerInfo.lossRound += 1
                playerInfo.winGame += 1
            }
            if (countRoundWon === 2 && gameRounds.length === 2){
                playerInfo.winRound += 2
                playerInfo.winGame += 1
            }     
        },
        findPlayerInfo(userId) {
            const playerInfo = this.players.reduce((value, player) => {
                    if (player.id === userId){
                        value = player;
                    }
                    return value
                }, {})
            return playerInfo
        },
        takeCountWinRounds(arr, userId) {
            return arr.reduce((id, item) => {
                if (userId === item){
                    id += 1
                }   
                return id
            }, 0)
        },
        getArrRoundPoints(gameId){
            return this.games.reduce((arr, game) => {
                if (game.id === gameId){
                    arr = game.rounds;
                }
                return arr;
            }, [])
        },
    },

//-//
    
    components: {
        AddNewPlayer: () => import('./AddNewPlayer/AddNewPlayer.vue'),
        CreateGame: () => import('./CreateGame/CreateGame.vue')
    }
}
</script>

<style>

</style> 
