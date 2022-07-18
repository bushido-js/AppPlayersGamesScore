<template>
<div> 
    <div class="row">
        <div class="col-6 mb-2">
            <div class="row">
                <div class="col-6">
                    <input @keyup.enter="clickHeandler"  class="form-control" placeholder="Добавьте участника" v-model="value">
                </div>
                <div class="col-6">
                    <button type="button" class="btn btn-primary" @click="clickHeandler" >Добавить</button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="row">
        <div class="col-6">
            <ul class="list-group">
                <li class="list-group-item " v-for="(player, index) of players">
                    <strong >{{ index + 1 }}</strong>
                    <span>{{ player }}</span>
                    <span class="badge bg-primary rounded-pill">999</span>
                </li>
            </ul>
        </div>
    </div>

</div>


</template>

<script>
export default {
    data() {
        return {
            players: [],
            value: "",
        };
    },
    methods: {
        clickHeandler: function () {
            this.addPlayer();
            this.clearInput();
        },
        addPlayer: function () {
            this.players.push(this.value);
        },
        clearInput: function () {
            let value = 'sdfsdf'
            this.value = '';
            console.log(this);
        }
    }
}
</script>