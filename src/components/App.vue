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
            
            @createGameButtonClicked="addGame"
            @sendInfoGameTwoPlayers="playGameTwoPlayers"
            @sendInfoGamesTourneys="playGameTourneys"

            @createTourneyButtonClicked="createTourney"

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
    mounted() {
        this.createMockData();
    },
    methods: {
        createMockData() {
            this.createPlayerObject("Олег");
            this.createPlayerObject("Влег");
            this.createPlayerObject("Влад");
            this.createPlayerObject("Миша");
            this.createPlayerObject("Шиша");
        },
     
        createTourney() {
            const k = 2;
            let arr = this.playersForTourney;
            for (let i = 0; i < arr.length - 1; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    this.addGameTourney(arr[i].id, arr[j].id)
                }
            }
        },
        addGameTourney(player1, player2) {
           this.tourneys.push(this.createGameObject(player1, player2));
        },

//-//

        removePlayerFromTourneyList(playerId) {
            let playersForTourney = this.playersForTourney;
            let playerObj = this.findPlayerInfo(playerId, this.playersForTourney);
            if (playerObj){
                let indexPlayer = playersForTourney.indexOf(playerObj);
                playersForTourney.splice(indexPlayer, 1);
            }
        },
        addPlayerForTourneyList(playerId) {
            if (this.findPlayerInfo(playerId, this.playersForTourney )) return;

            this.playersForTourney.push(this.findPlayerInfo(playerId, this.players));
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
                    return newGame; 
                // if (!this.games.length){
                //     return newGame;
                // } else {
                //     let objGame = this.games[this.games.length - 1];
                //     if (objGame.isOverGame){
                //         return newGame;
                //     }
                // }  
            }
        },
        addGame(player1, player2) {
            const objGame = this.createGameObject(player1, player2)
            if (objGame !== undefined) {
                this.games.push(objGame);
            }
        },

//-//

        playGameTwoPlayers(game, userId) {
            let rounds = game.rounds;
            this.gameLogic(rounds, userId, game, this.players, this.games);
        },
        playGameTourneys(game, userId) {
            let rounds = game.rounds;
            this.gameLogic(rounds, userId, game, this.playersForTourney, this.tourneys);
        },
        gameLogic (rounds, userId, game, playersArr, gamesArr) {
            this.thirdRound (rounds, userId, game, playersArr, gamesArr);
            this.secondRound (rounds, userId, game, playersArr, gamesArr);
            this.firstRound (rounds, userId);  
        },
        firstRound (rounds, num) {
            if (rounds[0] === 0){ 
                rounds.push(0); //pizdec
                Vue.set(rounds, 0, num);
            }
        },
        secondRound (rounds, num, game, playersArr, gamesArr){
            if (rounds[1] === 0){
                Vue.set(rounds, 1, num);
                if (rounds[0] === rounds[1]){
                    this.addPoints(game, playersArr, gamesArr);
                } else {
                    rounds.push(0);
                }
            }
        },
        thirdRound (rounds, num, game, playersArr, gamesArr){
            if (rounds[2] === 0){
                Vue.set(rounds, 2, num);
                if (rounds[0] === rounds[2]){
                    this.addPoints(game, playersArr, gamesArr);
                }
                if (rounds[1] === rounds[2]){
                    this.addPoints(game, playersArr, gamesArr);
                }
            }
        },

//-//

        addPoints(game, playersArr, gamesArr){
            const firstId = game.firstUser;
            const secondId = game.secondUser;
            const arrPoints = this.getArrRoundPoints(game.id, gamesArr);

            const firstPlayerCountWinRounds = this.takeCountWinRounds(arrPoints, firstId);
            const firstPlayerCountLossRounds = this.takeCountLossRounds(arrPoints, firstId);
            const secondPlayerCountWinRounds = this.takeCountWinRounds(arrPoints, secondId);
            const secondPlayerCountLossRounds = this.takeCountLossRounds(arrPoints, secondId);

            this.addPointsForPlayer(firstPlayerCountWinRounds, firstPlayerCountLossRounds, firstId, playersArr);
            this.addPointsForPlayer(secondPlayerCountWinRounds, secondPlayerCountLossRounds, secondId, playersArr);
            game.isOverGame = true
        },
        addPointsForPlayer(countRoundWon, countRoundLoss, userId, playersArr) {
            const playerInfo = this.findPlayerInfo(userId, playersArr);
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
                , 0);
        },
        takeCountLossRounds(arr, userId) {
            return arr.reduce((lossRounds, item) => 
                lossRounds += userId !== item 
                    ? 1 
                    : 0 
                , 0);
        },
        getArrRoundPoints(gameId, gamesArr){
            return gamesArr.reduce((arr, game) => {
                if (game.id === gameId){
                    arr = game.rounds;
                }
                return arr;
            }, []);
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
