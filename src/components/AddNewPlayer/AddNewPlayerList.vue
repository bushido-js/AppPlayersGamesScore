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

export default{
    data() {
        return{
            addPlayerForTourneyList: null
        }
    },
    props: {
        'players': Array
    },
    methods: {
        clickIdPlayer(id) {
            this.$emit('addPlayerForTourneyList', id)
        }
    }
}

</script>