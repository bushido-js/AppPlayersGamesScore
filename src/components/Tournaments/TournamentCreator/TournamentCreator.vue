<template>
    <div class="row">
        <div class="col-sm-5">
            <div class="row">
                <div>
                    <h5 class="">Выберете игроков для Турнира</h5>
                    <PlayersList/>
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
import { mapActions } from 'vuex';
export default{ 
    computed:{
        playersForTourney(){
            return this.$store.state.playersForTourney;
        }
    },
    components:{
        PlayersList: () => import("/src/components/Players/PlayersList.vue"),
    },
    methods:{
        ...mapActions(['removePlayerFromTourneyList']),
        ...mapActions(['createTourneyObject']),
        removePlayer(id) {
            this.removePlayerFromTourneyList(id)
        },
        createTourneyButtonClicked() {
            this.createTourneyObject()
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