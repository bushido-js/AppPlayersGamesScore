<template>
    <div>
        <GameCreator
            @createGameButtonClicked="createGameButtonClicked"
        />
        <hr>
        <GameField
            :players="players"
            :games="games"
            @sendInfoGame="sendInfoGameTwoPlayers"
        />
    </div>

</template>

<script>
export default {
    computed:{
        players () {
            return this.$store.state.players
        }
    },
    components:{
        GameCreator: () => import('./GameCreator/GameCreator.vue'),
        GameField: () => import('./GameField/GameField.vue')
    },
    props: {
        'games': Array
    },
    methods: {
        sendInfoGameTwoPlayers(game, userId) {
            this.$emit('sendInfoGameTwoPlayers', game, userId)
        },
        createGameButtonClicked (value1, value2) {
            this.$emit('createGameButtonClicked', value1, value2)
        },

    },

}
</script>

<style>

</style>