<template>
    <div>
        <div class="row">
            <div class="col-6">
                <div class="row">
                    <div class="col-5">
                        <select id="selectOne"  v-model="firstSelected" class="form-select">
                            <option v-for="player in players" :value="player.id">
                                {{player.id}}.
                                {{player.name}}
                                {{player.winRound}}
                                /
                                {{player.lossRound}}
                                |
                                {{player.winGame}}
                            </option>
                        </select>
                    </div>
                    
                    <div class="col-2 position-relative">
                        <h2 class="position-absolute top-50 start-50 translate-middle">vs</h2>
                    </div>

                    <div class="col-5">
                        <select id="selectTwo" v-model="secondSelected" class="form-select">
                            <option v-for="player in players" :value="player.id">
                                {{player.id}}.
                                {{player.name}}
                                {{player.winRound}}
                                /
                                {{player.lossRound}}
                                |
                                {{player.winGame}}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-primary" @click="createNewGame">Создать</button>
            </div>
        </div>
        <hr>
        <GamesField 
            :players="players"
            :games="games"
            :firstSelected="firstSelected"            
            :secondSelected="secondSelected"   
        />
    </div>

</template>

<script>
export default {
    props: {
        'players': Array,
        'games': Array
    },
    data() {
        return {
            firstSelected: '',
            secondSelected: '', 
            count: 0
        }
    },
    methods: {
       createNewGame () {
            const newGame = {
                id: this.count += 1,
                firstUser: this.firstSelected,
                secondUser: this.secondSelected,
                firstUserPoints: [0],
                secondUserPoints: [0]
            }
            if (newGame.firstUser !== '' &&
                newGame.secondUser !== '' &&
                newGame.firstUser !== newGame.secondUser
                ) {
                    this.sendObject (newGame)
            }
       },
       sendObject (obj) {
            this.$emit('addNewGame', obj)        
       }
       
       
    },
    computed: {},
    components:{
        GamesField: () => import('./GameField/GameField.vue')
    }

}
</script>

<style>

</style>