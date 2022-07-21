<template>

    <div>
        <div class="row" >
            <div class="col-6">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(player, index) of players">
                        <strong > {{ player.id = index + 1 }} </strong>
                        <span>{{ player.name }}</span>
                        <span class="badge bg-primary rounded-pill">{{ player.win }}</span>
                        /
                        <span class="badge bg-danger rounded-pill">{{ player.loss }}</span>
                        |
                        <span class="badge bg-warning rounded-pill">{{ player.wGames }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>

export default{
    props: [
        'players'
    ],
    mounted() {
        console.log('players', Boolean(this.players.length));
    }
}

</script>