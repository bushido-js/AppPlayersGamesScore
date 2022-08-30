<template>
    <div class="row">
        <div class="col-6">
            <div class="row">
                <PlayersSelector
                    :players="players"
                    @sendSelect="firstPlayerSelected"
                />
                
                <div class="col-2 position-relative">
                    <h2 class="position-absolute top-50 start-50 translate-middle">vs</h2>
                </div>
    
                <PlayersSelector
                    :players="players"
                    @sendSelect="secondPlayerSelected"
                />
                
            </div>
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-primary" @click="createGameButtonClicked">Создать</button>
        </div>
    </div>

</template>

<script>
export default{
    data() {
        return {
            firstPlayerId: null,
            secondPlayerId: null,
        }
    },
    components:{
        PlayersSelector:() => import('/src/components/Players/PlayersSelector.vue')
    },
    props: {
        'players': Array,
    },
    methods:{
        firstPlayerSelected(id) {
            this.firstPlayerId = id
        },
        secondPlayerSelected(id) {
            this.secondPlayerId = id
        },
        createGameButtonClicked () {
            this.$emit('createGameButtonClicked', this.firstPlayerId, this.secondPlayerId)
        },  
    },
}

</script>