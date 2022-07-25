<template>
  <div class="container mt-2">
    <AddNewPlayer 
      :players="players"
      @add-player="addPlayer"
    />
    <hr size="5" class="col-6">
    <CreateGames 
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
    },
    addGame(obj) {
      this.games.push(obj);
    },
  },
  components: {
    AddNewPlayer: () => import('./AddNewPlayer/AddNewPlayer.vue'),
    CreateGames: () => import('./CreateGames/CreateGames.vue')
  }
}
</script>

<style>

</style> 
