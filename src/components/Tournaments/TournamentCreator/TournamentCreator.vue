<template>
    <div class="row " :class="{hide: isHide}">
        <div class="col-sm-5">
            <div class="row">
                <div>
                    <h5 class="">Выберете игроков для Турнира</h5>
                    <PlayersList
                        :players="players"
                        @sendPlayerId="sendPlayerId"
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
                            <span class="badge bg-warning rounded-pill">{{ player.winGameTourney }}</span>
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
        players(){
            return this.$store.getters.allPlayers
        },
        playersForTourney(){
            return this.$store.state.playersForTourney;
        }
    },
    data() {
        return {
            isHide: false,
        }
    },
    components:{
        PlayersList: () => import("/src/components/Players/PlayersList.vue"),
    },
    methods:{
        ...mapActions(['createTourney', 'removePlayerFromTourneyList', 'addPlayerForTourneyList']),
        createTourneyButtonClicked() {
            this.createTourney();
            this.isHide = true;
        },
        removePlayer(id) {
            this.removePlayerFromTourneyList(id)
        },
        sendPlayerId(id){
            this.addPlayerForTourneyList(id)
        }
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
    .hide{
        display:none;
    }
</style>