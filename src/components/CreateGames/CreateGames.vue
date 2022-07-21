<template>

    <div>
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class="col-5">
                        <select id="selectOne" @change="filterArr" v-model="firstSelected" class="form-select">
                            <option v-for="player in players" >
                                {{player.id}}.
                                {{player.name}}
                                {{player.win}}
                                /
                                {{player.loss}}
                                |
                                {{player.wGames}}
                            </option>
                        </select>
                     </div>
                    
                    <div class="col-2 position-relative">
                        <h2 class="position-absolute top-50 start-50 translate-middle">vs</h2>
                    </div>

                     <div class="col-5">
                        <select id="selectTwo" v-model="secondSelected" class="form-select">
                            <option v-for="player in arrByID" >
                                {{player.id}}.
                                {{player.name}}
                                {{player.win}}
                                /
                                {{player.loss}}
                                |
                                {{player.wGames}}
                            </option>
                        </select>
                     </div>
                </div>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-primary" @click="CreateNewGame">Создать</button>
            </div>
        </div>
        <hr>
        <GamesField 
            v-bind:players="players"
            v-bind:counter="counter"
            v-bind:getFirstId="getFirstId"
            v-bind:getSecondId="getSecondId"             
        />
    </div>

</template>

<script>
import GamesField from './GamesField.vue';
export default {
    props: {
        'players': Array,
        'games': Array
    },
    data() {
        return {
            firstSelected: '',
            secondSelected: '', 
            arrByID: [],
            counter: 0,
        }
    },
    methods: {
       filterByID(item) {
            if (item.id == this.getFirstId){
               return false
            }
            return true
       },
       filterArr() {
        this.arrByID = this.players.filter(this.filterByID)
       },
       CreateNewGame () {
            const newGame = {
                id: 1,
                firstUser: this.players[Number(this.getFirstId) - 1].name ,
                secondUser: this.players[Number(this.getSecondId) - 1].name,
            }
            this.$emit('addNewGame', newGame)
            this.counter += 1
       },
       
    },
    computed: {
    getFirstId: function() {
        return this.firstSelected.split('')[0]
    },
    getSecondId: function() {
        return this.secondSelected.split('')[0]
    }
},
    components:{
        GamesField
    }

}
</script>

<style>

</style>