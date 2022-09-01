<template>
    <div >
        <TournamentCreator />
        <hr class="mt-2">
        <GameField
            :players="playersForTourney"
            :games="tourneys"

            @sendInfoGame="sendInfoGamesTourneys"
        />
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
    components: {
        TournamentCreator: () => import("./TournamentCreator/TournamentCreator.vue"),
        GameField: () => import("../Games/GameField/GameField.vue")
    },
    computed:{
        playersForTourney(){
            return this.$store.state.playersForTourney
        },
        tourneys(){
            return this.$store.state.tourneys
        }
    },
    methods: {
        ...mapActions(['playGameTourneys']),
        sendInfoGamesTourneys(game, userId) {
            this.playGameTourneys({game, userId})
        },
    },
}
</script>
