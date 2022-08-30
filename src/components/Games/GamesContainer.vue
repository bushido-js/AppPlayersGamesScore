<template>
    <div>
        <GameCreator
            :players="players"
            
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
    components:{
        GameCreator: () => import('./GameCreator/GameCreator.vue'),
        GameField: () => import('./GameField/GameField.vue')
    },
    props: {
        'players': Array,
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