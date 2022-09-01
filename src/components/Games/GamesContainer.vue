<template>
    <div>
        <GameCreator/>
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
            this.playGameTwoPlayers({game, userId})
        },
    },

}
</script>

<style>

</style>