<template>
    <div >
        <div class="row">
            <div class="col-sm-5">
                <div class="row">
                    <div>
                        <h5 class="">Выберете игроков для Турнира</h5>
                        <AddPlayerListForTournament 
                        :players="players"
                        @addPlayerForTourneyList="addPlayerForTourneyList"
                        />
                    </div>
                </div>
            </div>
            <div class="col-sm-5">
                <div class="">
                    <div class="">
                        <h5 class="">Список участников Турнира</h5>
                        <ul class="list-group">
                            <li class="list-group-item" v-for="(player) of playersForTourney" @click="removePlayer(player.id)">
                                <strong > {{player.id}} </strong>
                                <span>{{player.name }}</span>
                                <span class="badge bg-primary rounded-pill">{{ player.winRound }}</span>
                                /
                                <span class="badge bg-danger rounded-pill">{{ player.lossRound }}</span>
                                |
                                <span class="badge bg-warning rounded-pill">{{ player.winGame }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-2 div-button">
                <button type="submit" class="btn btn-outline-primary align-middle" @click="createTourneyButtonClicked">Создать Турнир</button>
            </div>
        </div>
        <hr class="mt-2">
        <GamesField 
            :players="playersForTourney"
            :games="tourneys"

            @sendInfoGame="sendInfoGamesTourneys"
        />
    </div>
</template>

<script>
export default{
    data() {
        return {
            removePlayerId: null,
        }
    },
    props: {
        'players': Array,
        'games': Array,
        'playersForTourney': Array,
        'tourneys': Array
    },
    components: {
    AddPlayerListForTournament: () => import("../../AddNewPlayer/AddNewPlayerList.vue"), 
    GamesField: () => import("../GameField/GameField.vue")
    },
    methods: {
        addPlayerForTourneyList (id) {
            this.$emit('addPlayerForTourneyList', id)
        },
        removePlayer(id) {
            this.$emit('removePlayerFromTourneyList', id)
        },
        createTourneyButtonClicked() {
            this.$emit('createTourneyButtonClicked')
        },
        sendInfoGamesTourneys(game, userId) {
            this.$emit('sendInfoGamesTourneys', game, userId)
        },
    },
}
</script>
<style scoped>
.div-button {
    display: flex;
    justify-content: center;
}
</style>