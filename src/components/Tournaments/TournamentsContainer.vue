<template>
    <div >
        <TournamentCreator 
            :playersForTourney="playersForTourney"

            @addPlayerForTourneyList="addPlayerForTourneyList"
            @removePlayerFromTourneyList="removePlayerFromTourneyList"

            @createTourneyButtonClicked="createTourneyButtonClicked"
        />
        <hr class="mt-2">
        <GameField
            :players="playersForTourney"
            :games="tourneys"

            @sendInfoGame="sendInfoGamesTourneys"
        />
    </div>
</template>

<script>
export default{
    computed:{
        players () {
            return this.$store.state.players
        }
    },
    components: {
        TournamentCreator: () => import("./TournamentCreator/TournamentCreator.vue"),
        GameField: () => import("../Games/GameField/GameField.vue")
    },
    props: {
        'games': Array,
        'playersForTourney': Array,
        'tourneys': Array
    },
    methods: {
        addPlayerForTourneyList (id) {
            this.$emit('addPlayerForTourneyList', id)
        },
        removePlayerFromTourneyList (id) {
            this.$emit('removePlayerFromTourneyList', id)
        },
        sendInfoGamesTourneys(game, userId) {
            this.$emit('sendInfoGamesTourneys', game, userId)
        },
        createTourneyButtonClicked() {
            this.$emit('createTourneyButtonClicked')
        },
    },
}
</script>
