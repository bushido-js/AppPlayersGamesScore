<template>
    <div class="container mt-2">
        <AddNewPlayer 
            :players="players"
            @addNewPlayer="createPlayerObject"
        />
    <hr size="5" class="col-6">
        <SelectGame
            :players="players"
            :games="games"
            :playersForTourney="playersForTourney"
            :tourneys="tourneys"
            
            @createGameButtonClicked="createGameObject"
            @sendInfoGame="playGame"

            @addPlayerForTourneyList="addPlayerForTourneyList"
            @removePlayerFromTourneyList="removePlayerFromTourneyList"
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
            tourneys: [],
            playersForTourney: [],

            indexPlayer: 0,
            indexGame: 0,
        }
    },
    methods: {
        

//-//

        removePlayerFromTourneyList(playerId) {
            let playersForTourney = this.playersForTourney;
            let playerObj = this.findPlayerInfo(playerId, this.playersForTourney);
            if (playerObj){
                let indexPlayer = playersForTourney.indexOf(playerObj);
                playersForTourney.splice(indexPlayer, 1)
            }
        },
        addPlayerForTourneyList(playerId) {
            if (this.findPlayerInfo(playerId, this.playersForTourney )) return;

            this.playersForTourney.push(this.findPlayerInfo(playerId, this.players))
        },
        createPlayerObject(value) {
            let newPlayer = {};
            if (value.trim()) {
                newPlayer = {
                    id: this.indexPlayer += 1,
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
                id: this.indexGame += 1,
                firstUser: firstSelected,
                secondUser: secondSelected,
                rounds: [0],
                isOverGame: false
            }
            if (newGame.firstUser !== '' &&
                newGame.secondUser !== '' &&
                newGame.firstUser !== newGame.secondUser
                ) { 
                    this.addGame(newGame)
                                                                //return newGame, и уже в методах игры и турниров использовать 
                                                                // это позволит добавлять в игры отдельно и в турниры отдельно используя один метод
                    // this.addGame(newGame, this.games)
                // if (!this.games.length){
                //     this.addGame (newGame, this.games);
                // } else {
                //     let objGame = this.games[this.games.length - 1];
                //     if (objGame.isOverGame){
                //         this.addGame (newGame, this.games);
                //     }
                // }  
            }
        },
        addGame(obj) {
           this.games.push(obj)
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
                rounds.push(0) //pizdec
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

//-//

        addPoints(game){
            const firstId = game.firstUser;
            const secondId = game.secondUser;
            const arrPoints = this.getArrRoundPoints(game.id);

            const firstPlayerCountWinRounds = this.takeCountWinRounds(arrPoints, firstId);
            const firstPlayerCountLossRounds = this.takeCountLossRounds(arrPoints, firstId);
            const secondPlayerCountWinRounds = this.takeCountWinRounds(arrPoints, secondId);
            const secondPlayerCountLossRounds = this.takeCountLossRounds(arrPoints, secondId);

            this.addPointsForPlayer(firstPlayerCountWinRounds, firstPlayerCountLossRounds, firstId)
            this.addPointsForPlayer(secondPlayerCountWinRounds, secondPlayerCountLossRounds, secondId)
            game.isOverGame = true
        },
        addPointsForPlayer(countRoundWon, countRoundLoss, userId) {
            const playerInfo = this.findPlayerInfo(userId, this.players);
            playerInfo.lossRound += countRoundLoss;
            playerInfo.winRound += countRoundWon;
            playerInfo.winGame += countRoundWon >= 2 ? 1 : 0;    //pizdec // >= 2
        },
        findPlayerInfo(userId, players) {
            return players.find(player => player.id === userId);
        },
        takeCountWinRounds(arr, userId) {
            return arr.reduce((wonRounds, item) => 
                wonRounds += userId === item 
                    ? 1 
                    : 0 
                , 0)
        },
        takeCountLossRounds(arr, userId) {
            return arr.reduce((lossRounds, item) => 
                lossRounds += userId !== item 
                    ? 1 
                    : 0 
                , 0)
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
        SelectGame: () => import('./CreateTabs/SelectGame.vue'),
        AddNewPlayer: () => import('./AddNewPlayer/AddNewPlayer.vue'),
    }
}
</script>

<style>

</style> 
