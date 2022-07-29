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
            const gameId = game.id;
            let arrPoints = this.getArrRoundPoints(gameId);

            const firstPlayerPoints = arrPoints.filter(item => game.firstUser === item);
            const secondPlayerPoints = arrPoints.filter(item => !firstPlayerPoints.includes(item));

            this.addPointsForPlayer(firstPlayerPoints, game.firstUser);
            this.addPointsForPlayer(secondPlayerPoints, game.secondUser);
        },
        addPointsForPlayer(arr, userId){
            for(let elem of this.players){
                if(elem.id === userId){
                    if(!arr.length){
                        elem.lossRound += 2;
                    }
                    if(arr.length === 1){
                        elem.lossRound += 2;
                        elem.winRound += 1;
                    }
                    if(arr.length === 2){
                        elem.winRound += 2;
                        elem.lossRound += 1;

                        elem.winGame += 1;
                    }
                }
            }
        },
        getArrRoundPoints(gameId){
            let arrPoints = [];
            for(let elem of this.games){
                if(elem.id === gameId){
                    arrPoints = elem.rounds;
                }
            }
            return arrPoints;
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
