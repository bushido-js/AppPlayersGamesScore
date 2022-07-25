<template>
    <div class="row">
        <div class="col-6">
            <ul class="list-group">
                <li class="list-group-item" v-for="player of players">
                    <strong > {{player.id}} </strong>
                    <span>{{player.name }}</span>
                    <span class="badge bg-primary rounded-pill">{{ player.win }}</span>
                    /
                    <span class="badge bg-danger rounded-pill">{{ player.loss }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default{
    props: {
        'players': Array
    },
}

</script>