<template>
    <ul class="list-group ulGame">
        <li class="list-group-item liGame mb-2 border" v-for="game of games" :value="takeVariable(game)">
            <div class="row wrapper mt-1">

                <div class="col-5 border">
                    <div class="row" >
                        
                        <div class="col-9 name-first-player">
                            <div v-for="firstMember of players">
                                <div v-if="firstMember.id == game.firstUser">
                                    <strong>{{firstMember.name}}</strong>
                                    <span class="badge bg-primary rounded-pill">{{firstMember.winRound}}</span>
                                    /
                                    <span class="badge bg-danger rounded-pill">{{firstMember.lossRound}}</span>
                                    |
                                    <span class="badge bg-warning rounded-pill">{{firstMember.winGame}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-3 points first-player">
                            <div  v-for="point of game.rounds.slice().reverse()" @click="sendInfoGame(game, game.firstUser)" :value="game.rounds" :class="checkBoxStyle(point, game.firstUser)"></div>
                        </div>

                    </div>
                </div>

                <div class="col-2 position-relative">
                    <h3 class="position-absolute top-50 start-50 translate-middle">vs</h3>
                </div>

                <div class="col-5 border" >
                    <div class="row" >

                        <div class="col-3 points second-player">
                            <div v-for="point of game.rounds" @click="sendInfoGame(game, game.secondUser)" :value="game.rounds" :class="checkBoxStyle(point, game.secondUser)"></div>
                        </div>

                        <div class="col-9 name-second-player">
                            <div v-for="secondMember of players">
                                <div v-if="secondMember.id == game.secondUser">
                                    <strong>{{secondMember.name}}</strong>
                                    <span class="badge bg-primary rounded-pill">{{secondMember.winRound}}</span>
                                    /
                                    <span class="badge bg-danger rounded-pill">{{secondMember.lossRound}}</span>
                                    |
                                    <span class="badge bg-warning rounded-pill">{{secondMember.winGame}}</span>                                 

                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
export default{
    data () {
        return {
            currentGame: null,
        }
    },
    props: {
        'players': Array,
        'games': Array,        
    },
    methods: {
        takeVariable (game) {
            this.currentGame = game
        },
        sendInfoGame(game, userId){
            this.$emit('sendInfoGame', game, userId);
        },
        checkBoxStyle(point, num) {
            if(point === 0){
                return 'nothing'
            }
            if(point === num){
                return 'win'
            }
            if(point !== num){
                return 'loss'
            }
        }
    },
    computed: {}
}

</script>

<style scoped>
.points div.win {
    background-color: #10ed10;
}
.points div.loss {
    background-color:rgb(223, 7, 7)
}
.points div.nothing {
    background-color:white
}
.points div {
    border: 1px solid rgb(126, 125, 125);
    min-height: 1em;
    min-width: 1em;
    border-radius: 20%;
    /* padding: 0; */
    margin:auto 5px;
}
.points {
    display: flex;
    justify-content: flex-end;
}
.second-player {
    justify-content: flex-start;
}
.name-second-player{
    display: flex;
    justify-content: flex-end;
}
.wrapper {
    /* border: 1px solid #ced4da; */
    padding: 0.5em 1em;
}
</style>