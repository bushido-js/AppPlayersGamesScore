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
                            <div id="p1g1" @click="onClickFirst(game)" v-for="ochko of game.firstUserPoints"></div>
                        </div>

                    </div>
                </div>

                <div class="col-2 position-relative">
                    <h3 class="position-absolute top-50 start-50 translate-middle">vs</h3>
                </div>

                <div class="col-5 border" >
                    <div class="row" >

                        <div class="col-3 points second-player">
                            <div id="p2g1" @click="onClickSecond(game)" v-for="ochko of game.secondUserPoints"></div>
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
        
        }
    },
    props: {
        'players': Array,
        'games': Array,        
    },
    methods: {

        onClickFirst(game) {
            this.addPointsFirstUser(game)
            console.log('Первый', game.firstUserPoints);
            this.addPointsSecondUser(game)
            console.log('Второй',game.secondUserPoints);

        },
            addPointsFirstUser(g) {
                let arr = g.firstUserPoints
                if (this.getSumInArray(arr) < 2) {
                    if (arr[0] === 0){
                        arr[0] = 1
                        return arr.push(0) 
                    } 
                    if (arr[1] === 0){
                        return arr[1] = 1
                    }
                }
            },
            addPointsSecondUser(g) {
                let arr = g.firstUserPoints;
                let arr2 = g.secondUserPoints;
                if (arr[0] === 1) {
                    arr2[0] = 0
                }
                if (arr[1] === 1) {
                    arr2[1] = 0
                } else if(arr[1] === 0) {
                    arr2[1] = 1
                }
            },
        getSumInArray(arr){
            let sum = 0;
            for (let elem of arr){
                sum += elem
            }
            return sum
        },
       
    },
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