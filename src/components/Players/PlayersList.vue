<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="player of players" @click="clickIdPlayer(player.id)">
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
</template>

<script>
import { mapActions } from 'vuex'
export default{
    computed:{
        players () {
            // добавит геттер allPlayers, заменить везде
            return this.$store.state.players
        }
    },
    methods: {
        ...mapActions(['addPlayerForTourneyList']),
        clickIdPlayer(id) {
            // заменить на emit
            this.addPlayerForTourneyList(id)
        }
       
    },
}

</script>
<style>
    
</style>