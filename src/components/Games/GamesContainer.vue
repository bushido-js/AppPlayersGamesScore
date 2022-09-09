<template>
    <div>
        <GameCreator />
        <hr>
        <GameField
            :players="players"
            :games="games"
        />
    </div>

</template>

<script>
export default {
    data(){
        return{
            currentGameObject: null,
        }
    },
    components:{
        GameCreator: () => import('./GameCreator/GameCreator.vue'),
        GameField: () => import('./GameField/GameField.vue')
    },
    computed:{
        players () {
            return this.$store.state.players
        },
        games() {
            return this.$store.state.games
        }
    },

}
</script>

<style>

</style>