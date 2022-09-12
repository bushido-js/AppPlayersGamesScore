<template>
    <div >
        <TournamentCreator />
        <hr class="mt-2">
        <GameField
            :players="playersForTourney"
            :games="currentTourney"
        />
        
        <div class="observation" v-if="isOverTourney"></div>
        <!-- <div class="row">
            <div class="col-12">
                <a href="#" onclick="location.reload(); return false;">
                        <button type="submit" class="btn btn-outline-primary align-middle" id="restart">
                        <h4>
                            Обновить страницу
                        </h4>
                    </button>
                </a>
            </div>
        </div> -->
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
    components: {
    TournamentCreator: () => import("./TournamentCreator/TournamentCreator.vue"),
    GameField: () => import("../Games/GameField/GameField.vue"),
    },
    data(){
        return{
            isDisable: true
        }
    },
    computed:{
        ...mapActions(['getTourneyWinner']),
        tourneys(){
            return this.$store.state.tourneys
        },
        currentTourney(){
            if(this.tourneys.length){
                return this.$store.getters.currentTourney
            }
        },
        playersForTourney(){
            return this.$store.state.playersForTourney
        },

        isOverTourney(){
            if (!this.currentTourney) {
                return false
            }
            let arr = []
            for (let elem of this.currentTourney){
                arr.push(elem.isOverGame)
            }
            let arr2 = arr.filter(item => item == true)
            if (arr.length === arr2.length){
                this.getTourneyWinner
            }
        }
    }
}
</script>

