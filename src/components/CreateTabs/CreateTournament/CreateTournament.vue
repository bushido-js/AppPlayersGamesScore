<template>
    <div>
        <div class="row">
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Выберете игроков для Турнира</h5>
                    <AddPlayerListForTournament 
                    :players="players"
                />
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Список участников Турнира</h5>
                    <ul class="list-group">
                        <li class="list-group-item" v-for="player of playersForTournament">
                            <strong > {{player.id}} </strong>
                            <span>{{player.name }}</span>
                            <span class="badge bg-primary rounded-pill">{{ player.winRound }}</span>
                            /
                            <span class="badge bg-danger rounded-pill">{{ player.lossRound }}</span>
                            |
                            <span class="badge bg-warning rounded-pill">{{ player.winGame }}</span>
                        </li>
                    <button type="submit" class="btn btn-primary ">Начать Турнир</button>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        'players': Array,
    },
    components: {
    AddPlayerListForTournament: () => import("../../AddNewPlayer/AddNewPlayerList.vue"), 
    }
}
</script>
<AddPlayerListForTournament 
            :players="players"
        />