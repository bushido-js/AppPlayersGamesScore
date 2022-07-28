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
    },
    components: {
        AddNewPlayer: () => import('./AddNewPlayer/AddNewPlayer.vue'),
        CreateGame: () => import('./CreateGame/CreateGame.vue')
    }
}
</script>

<style>

</style> 
