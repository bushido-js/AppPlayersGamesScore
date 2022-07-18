<template>
  <div class="container mt-2">

    <AddNewPlayer />
    <hr size="5" class="col-6">
    <CreateGames />
    <hr>
    <GamesField />
    
  </div>
</template>

<script>
import AddNewPlayer from './AddNewPlayer.vue';
import CreateGames from './CreateGames.vue';
import GamesField from './GamesField.vue';
  export default {
    components: {
    AddNewPlayer,
    CreateGames,
    GamesField
}
}
</script>

<style>

</style> 
