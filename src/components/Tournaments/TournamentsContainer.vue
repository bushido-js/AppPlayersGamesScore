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
        <div v-if="areTheGamesOver()">
            <GameField 
                :players="playersForTourney"
            />
            <div class="see"></div>
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
</style>
