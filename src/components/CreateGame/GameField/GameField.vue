<template>
    <ul class="list-group ulGame">
        <li class="list-group-item liGame mb-2 border" v-for="game of games" >
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

                        <div class="col-3 points fitst-player">
                            <div  v-for="ochko of game.rounds" @click="clickPlayer(game, 1, ochko)" :value="game.rounds"></div>
                        </div>

                    </div>
                </div>

                <div class="col-2 position-relative">
                    <h3 class="position-absolute top-50 start-50 translate-middle">vs</h3>
                </div>

                <div class="col-5 border" >
                    <div class="row" >

                        <div class="col-3 points second-player">
                            <div   v-for="ochko of game.rounds" @click="clickPlayer(game, 2, ochko)" :value="game.rounds"></div>
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
            rounds: [0]
        }
    },
    props: {
        'players': Array,
        'games': Array,        
    },
    methods: {
        clickPlayer(game, num, ochko) {
            let rounds = game.rounds;
            this.gameLogic(rounds, num);
            },
            gameLogic (rounds, num) {
                this.thirdRound (rounds, num);
                this.secondRound (rounds, num);
                this.firstRound (rounds, num);
            },
                firstRound (rounds, num, ochko) {
                    if (rounds[0] === 0){ 
                            rounds.push(0)
                            rounds[0] = num
                    }
                },
                secondRound (rounds, num){
                    if (rounds[1] === 0){
                        rounds[1] = num
                        if (rounds[0] === rounds[1]){
                            this.getWinner(num)
                        } else {
                            rounds.push(0)
                        }
                    }
                },
                thirdRound (rounds, num){
                    if (rounds[2] === 0){
                        rounds[2] = num
                        if (rounds[0] === rounds[2]){
                            this.getWinner(num)
                        }
                        if (rounds[1] === rounds[2]){
                            this.getWinner(num)
                        }
                    }
                },
        getWinner(num){
            alert('Игрок ' + num + ' выйграл!')
        },
    },
    computed: {
    }
}

</script>

<style scoped>
div.win {
    background-color: #10ed10;
}
div.loss {
    background-color:rgb(223, 7, 7)
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
.active {
    background-color: #10ed10;
}
.valid {
    background-color: rgb(223, 7, 7);
}
</style>