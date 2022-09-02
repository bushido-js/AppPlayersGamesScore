<template>
    <div class="row">
        <div class="col-6">
            <div class="row">
                <PlayersSelector
                    @sendSelect="firstPlayerSelected"
                />
                
                <div class="col-2 position-relative">
                    <h2 class="position-absolute top-50 start-50 translate-middle">vs</h2>
                </div>
    
                <PlayersSelector
                    @sendSelect="secondPlayerSelected"
                />
                
            </div>
        </div>
        <div class="col-2">
            <button type="button" class="btn btn-primary " @click="createGameButtonClicked" :class="{disabled: isDisabled}" v-if="isOverLastGame()">Создать</button>
        </div>
    </div>

</template>

<script>
import { mapActions } from "vuex";
export default{
    computed:{
        games(){
            return this.$store.state.games
        },
    },
    data() {
        return {
            firstPlayerId: null,
            secondPlayerId: null,
            isDisabled: false
        }
    },
    components:{
        PlayersSelector:() => import('/src/components/Players/PlayersSelector.vue')
    },
    methods:{
        findGameInfo(userId, array) {
            return array.find(obj => obj.id === userId)
        },
        firstPlayerSelected(id) {
            this.firstPlayerId = id
        },
        secondPlayerSelected(id) {
            this.secondPlayerId = id
        },
        ...mapActions(['createGameObject']),
        createGameButtonClicked () {
            this.createGameObject({1:this.firstPlayerId, 2:this.secondPlayerId})
        },
        isOverLastGame(){
            if (!this.games.length){return true}
            let idLastGame = this.games.length - 1;
            let objGame = this.games[idLastGame]
            if (!objGame.isOverGame){
                this.isDisabled = true
                return true
            } else {
                this.isDisabled = false
                return true
            }
        }
 
    },
}

</script>