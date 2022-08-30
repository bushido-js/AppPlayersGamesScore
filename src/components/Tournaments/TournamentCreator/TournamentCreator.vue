<template>
    <div class="row">
        <div class="col-sm-5">
            <div class="row">
                <div>
                    <h5 class="">Выберете игроков для Турнира</h5>
                    <PlayersList
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
</template>

<script>
    export default{ 
        components:{
            PlayersList: () => import("/src/components/Players/PlayersList.vue"),
        },
        data() {
            return {
                removePlayerId: null,
            }
        },
        props: {
            'playersForTourney': Array,
        },
        methods:{
            addPlayerForTourneyList (id) {
                this.$emit('addPlayerForTourneyList', id)
            },
            removePlayer(id) {
                this.$emit('removePlayerFromTourneyList', id)
            },
            createTourneyButtonClicked() {
                this.$emit('createTourneyButtonClicked')
            },
        }
    }
</script>
<style scoped>
    .div-button {
        display: flex;
    }
    .div-button button{
        width: 100%;
    }
</style>