<template>
    <div class="">
        <nav>
            <div class="nav nav-tabs mb-2" >
                <button class="nav-link" @click="currentTab = 'createGame'" :class="[currentTab == 'createGame' ? activeClass : '']" type="button">Создать Игру</button>
                <button class="nav-link" @click="currentTab = 'createTournament'" :class="[currentTab == 'createTournament' ? activeClass : '']" type="button">Создать Турнир</button>
            </div>
        </nav>
        <div class="tab-content">
            <div class="tab-pane" :class="[currentTab == 'createGame' ? showAndActiveClass : '']" v-if="currentTab == 'createGame'">
                <CreateGame 
                    :players="players"
                    :games="games"

                    @createGameButtonClicked="createGameButtonClicked"
                    @sendInfoGameTwoPlayers="sendInfoGameTwoPlayers"
                />
            </div>
            <div class="tab-pane" :class="[currentTab == 'createTournament' ? showAndActiveClass : '']"  v-if="currentTab == 'createTournament'">
                <CreateTournament
                    :players="players"
                    :playersForTourney="playersForTourney"
                    :tourneys="tourneys"

                    @addPlayerForTourneyList="addPlayerForTourneyList"
                    @removePlayerFromTourneyList="removePlayerFromTourneyList"

                    @sendEvent="sendEvent"
                    @sendInfoGamesTourneys="sendInfoGamesTourneys"
                />
            </div>
        </div>
    </div>

</template>

<script>
export default{
    props:{
        'players': Array,
        'games': Array,
        'playersForTourney': Array,
        'tourneys': Array
    },
    data() {
        return {
            currentTab: 'createGame',
            activeClass: 'active',
            showAndActiveClass: 'fade show active'
        }
    },
    components: {
        CreateTournament: () => import('./CreateTournament/CreateTournament.vue'),
        CreateGame: () => import('./CreateGame/CreateGame.vue')
    },
    methods: { 
        sendInfoGameTwoPlayers(game, userId) {
            this.$emit('sendInfoGameTwoPlayers', game, userId)
        },
        sendInfoGamesTourneys (game, userId) {
            this.$emit('sendInfoGamesTourneys', game, userId)
        },
        createGameButtonClicked(value1, value2) {
            this.$emit('createGameButtonClicked', value1, value2)
        },
        addPlayerForTourneyList(id) {
            this.$emit('addPlayerForTourneyList', id)
        },
        removePlayerFromTourneyList (id) {
            this.$emit('removePlayerFromTourneyList', id)
        },
        sendEvent() {
            this.$emit('sendEvent')
        },
    }
}

</script>
<style scoped>
    .nav button{
        margin-right: 5px;
    }
</style>