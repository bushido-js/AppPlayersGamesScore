<template>
    <div >
        <TournamentCreator />
        <hr class="mt-2">
        <GameField
            :players="playersForTourney"
            :games="currentTourney"

            @sendInfoGame="sendInfoGamesTourneys"
        />
        <hr class="mt-2 additional-games">
        <!-- <div v-if="areTheGamesOver()">
            <GameField 
                :players="playersForTourney"
            />
        </div> -->
        <div class="see">
            <button class="button btn-primary" @click="areTheGamesOver()"></button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
    components: {
    TournamentCreator: () => import("./TournamentCreator/TournamentCreator.vue"),
    GameField: () => import("../Games/GameField/GameField.vue"),
},
    computed:{
        playersForTourney(){
            return this.$store.state.playersForTourney
        },
        currentTourney(){
            return this.$store.getters.currentTourney 
        }
    },
    methods: {
        ...mapActions(['playGameTourneys']),
        ...mapActions(['areTheGamesOverPrice']),
        sendInfoGamesTourneys(game, userId) {
            this.playGameTourneys({game, userId})
        },
        areTheGamesOver(){
            console.log('currentTourney', this.currentTourney);
            let arr = []
            for (let elem of this.currentTourney){
                arr.push(elem.isOverGame)
            }
            let arr2 = arr.filter(item => item == true)
            if (arr == arr2){
                console.log('Заебись');
            }
            console.log('arr', arr);
            console.log('arr2', arr2);
            console.log(arr.indexOf(true));
        }
    },
}
</script>
<style>
    .additional-games{
        color: rgb(255, 187, 0);
        height: 5px;
    }
    .see{
        height: 200px;
        width: 100%;
        background-color: orange;
    }
    .button{
        height: 90%;
        width: 90%;
    }
</style>
