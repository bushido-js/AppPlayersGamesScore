<template>
    <div>
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <CreateGameSelect 
                        :players="players"
                        @sendSelect="firstPlayerSelected"
                    />
                    
                    <div class="col-2 position-relative">
                        <h2 class="position-absolute top-50 start-50 translate-middle">vs</h2>
                    </div>

                    <CreateGameSelect 
                        :players="players"
                        @sendSelect="secondPlayerSelected"
                    />
                    
                </div>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-primary" @click="createGameButtonClicked">Создать</button>
            </div>
        </div>
        <hr>
        <GamesField 
            :players="players"
            :games="games"

            @sendInfoGame="sendInfoGame"
        />
    </div>

</template>

<script>
export default {
    props: {
        'players': Array,
        'games': Array
    },
    data() {
        return {
            firstPlayerId: null,
            secondPlayerId: null,
        }
    },
    methods: {
        sendInfoGame(game, num) {
            this.$emit('sendInfoGame', game, num)
        },
        firstPlayerSelected(id) {
            this.firstPlayerId = id  
        },
        secondPlayerSelected(id) {
            this.secondPlayerId = id
        },
        createGameButtonClicked () {
            this.$emit('createGameButtonClicked', this.firstPlayerId, this.secondPlayerId)
        }
    },
    components:{
        CreateGameSelect: () => import ('./CreateGameSelect.vue'),
        GamesField: () => import('./GameField/GameField.vue')
    }

}
</script>

<style>

</style>