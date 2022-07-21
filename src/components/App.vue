<template>
  <div class="container mt-2">

    <AddNewPlayer 
      v-bind:players="players"
      @add-player="addPlayer"
    />
    <hr size="5" class="col-6">
    <CreateGames 
      v-bind:players="players"
      @addNewGame="addGame"
      v-bind:games="games"
    />
    
  </div>
</template>

<script>
// import AddNewPlayer from './AddNewPlayer/AddNewPlayer.vue';
import CreateGames from './CreateGames/CreateGames.vue';

export default {
  
  data() {
    return {
      players: [
        // {id: 1, name: 'Олег', win: 0, loss: 0, wGames: 0},
      ],
      games: [
        
      ],
    }
  },
  methods: {
    addPlayer: function (obj) {
      this.players.push(obj);
    },
    addGame: function (obj) {
      this.games.push(obj);
        
    },
  },
  components: {
    AddNewPlayer: () => {
      return import('./AddNewPlayer/AddNewPlayer.vue')
    },
    CreateGames,
  }
}
</script>

<style>

</style> 
