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
            <button type="button" class="btn btn-primary " @click="createGameButtonClicked" :class="{disabled: isDisabled}" v-if="isOverLastGame">Создать</button>
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
        isOverLastGame(){
            if (!this.games.length){return true}
            let idLastGame = this.games.length - 1;
            if (this.games[idLastGame].isOverGame){
                this.isDisabled = false
                return true
            }
            this.isDisabled = true
            return true  
        }
    },
    data() {
        return {
            firstPlayerObj: null,
            secondPlayerObj: null,
            isDisabled: false
        }
    },
    components:{
        PlayersSelector:() => import('/src/components/Players/PlayersSelector.vue')
    },
    methods:{
        ...mapActions(['createGame']),
        firstPlayerSelected(obj) {
            this.firstPlayerObj = obj
        },
        secondPlayerSelected(obj) {
            this.secondPlayerObj = obj
        },

        createGameButtonClicked () {
            if (this.firstPlayerObj.id  && this.secondPlayerObj.id  && this.firstPlayerObj.id !== this.secondPlayerObj.id) {
                this.createGame({ 1: this.firstPlayerObj, 2: this.secondPlayerObj })
            }
        },
        
 
    },
}

</script>