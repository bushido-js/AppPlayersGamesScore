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
            console.log('games', this.games);//*//
        },

//-//

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
            console.log('players', this.players); //*//
        },

//-//

        playGame(game, num) {
        this.gameLogic(game.rounds, num, game);
        console.log(this.games);
        },
        gameLogic (rounds, num, game) {
            const roundsClone = [];
            rounds.forEach(round => {
                roundsClone.push(round);
            })
            this.thirdRound (roundsClone, num);
            this.secondRound (roundsClone, num);
            this.firstRound (roundsClone, num);  

            game.rounds = roundsClone;
        },
        firstRound (rounds, num) {
            if (rounds[0] === 0){ 
                    rounds.push(0)
                    rounds[0] = num
            }
        },
        secondRound (rounds, num){
            if (rounds[1] === 0){
                rounds[1] = num
                if (rounds[0] === rounds[1]){
                    this.getWinner(num)
                } else {
                    rounds.push(0)
                }
            }
        },
        thirdRound (rounds, num){
            if (rounds[2] === 0){
                rounds[2] = num
                if (rounds[0] === rounds[2]){
                    this.getWinner(num)
                }
                if (rounds[1] === rounds[2]){
                    this.getWinner(num)
                }
            }
        },
        getWinner(num){
            console.log('Игрок ' + num + ' выйграл!')
        },

//-//
    },
    components: {
        AddNewPlayer: () => import('./AddNewPlayer/AddNewPlayer.vue'),
        CreateGame: () => import('./CreateGame/CreateGame.vue')
    }
}
</script>

<style>

</style> 
