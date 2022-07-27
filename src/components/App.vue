<template>
  <div class="container mt-2">
    <AddNewPlayer 
      :players="players"
      @addNewPlayer="createPlayerObject"
    />
    <hr size="5" class="col-6">
    <CreateGame 
      :players="players"
      @addNewGame="addGame"
      :games="games"


    />
  </div>
</template>

<script>


export default {
  
  data() {
    return {
      players: [],
      games: [],

      index: 0
    }
  },
  methods: {
    createGameObject () {
      const newGame = {
        id: this.count += 1,
        firstUser: this.firstSelected,
        secondUser: this.secondSelected,
        firstUserPoints: [0],
        secondUserPoints: [0]
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
      console.log('games', this.games);
    },

 
    createPlayerObject(value) {
      let newPlayer = {};
      if (value.trim()) {
        newPlayer = {
          id: this.index += 1,
          name: value,
          winRound: 0, // round
          lossRound: 0, // round
          winGame: 0 // games
        }
      }
      if (Object.keys(newPlayer).length) {
        this.addPlayer (newPlayer);
      }
    },
      addPlayer(obj) {
        this.players.push(obj);
        console.log('players', this.players);
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
