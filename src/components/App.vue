<template>
  <div class="container mt-2">
    <AddNewPlayer 
      :players="players"
      @addNewPlayer="addPlayer"
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
    }
  },
  methods: {
    addPlayer(obj) {
      this.players.push(obj);
      console.log('players', this.players);
    },
    addGame(obj) {
      this.games.push(obj);
      console.log('games', this.games);
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
