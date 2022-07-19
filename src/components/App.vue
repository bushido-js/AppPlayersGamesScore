<template>
  <div class="container mt-2">

    <AddNewPlayer 
      v-bind:players="players"
      @add-player="addPlayer"
    />
    <hr size="5" class="col-6">
    <CreateGames />
    <hr>
    <GamesField />
    
  </div>
</template>

<script>
import AddNewPlayer from './AddNewPlayer/AddNewPlayer.vue';
import CreateGames from './CreateGames.vue';
import GamesField from './GamesField.vue';
export default {
  
  data() {
    return {
      players: [
        // {id: 1, name: 'Олег', win: 0, loss: 0},
      ],
    }
  },
  methods: {
    addPlayer: function (value) {
          this.players.push(value);
    },
  },
  components: {
    AddNewPlayer,
    CreateGames,
    GamesField
  }
}
</script>

<style>

</style> 
