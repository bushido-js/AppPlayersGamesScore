<template>
    <div>
        <GameCreator />
        <hr>
        <GameField
            :players="players"
            :games="games"
            @sendInfoGame="sendInfoGameTwoPlayers"
        />
    </div>

</template>

<script>
import {mapActions} from 'vuex'
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
    methods: {
        ...mapActions(['playGameTwoPlayers']),

        sendInfoGameTwoPlayers(game, userId) {
            this.currentGameObject = game;
            console.log('CurrentGame', this.currentGameObject);
            this.playGameTwoPlayers({game, userId})
        },
    },

}
</script>

<style>

</style>