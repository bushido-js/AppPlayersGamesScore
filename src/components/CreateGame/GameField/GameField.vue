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
                                    <span class="badge bg-primary rounded-pill">{{firstMember.winGame}}</span>
                                    /
                                    <span class="badge bg-danger rounded-pill">{{firstMember.lossGame}}</span>
                                    |
                                    <span class="badge bg-warning rounded-pill">{{firstMember.winGames}}</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-3 points fitst-player">
                            <div id="p1g1" @click="onClick(game)" ></div>
                        </div>

                    </div>
                </div>

                <div class="col-2 position-relative">
                    <h3 class="position-absolute top-50 start-50 translate-middle">vs</h3>
                </div>

                <div class="col-5 border" >
                    <div class="row" >

                        <div class="col-3 points second-player">
                            <div id="p2g1"  ></div>
                        </div>

                        <div class="col-9 name-second-player">
                            <div v-for="secondMember of players">
                                <div v-if="secondMember.id == game.secondUser">
                                    <strong>{{secondMember.name}}</strong>
                                    <span class="badge bg-primary rounded-pill">{{secondMember.winGame}}</span>
                                    /
                                    <span class="badge bg-danger rounded-pill">{{secondMember.lossGame}}</span>
                                    |
                                    <span class="badge bg-warning rounded-pill">{{secondMember.winGames}}</span>                                 

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
        onClick(g) {
            console.log(g.id);;
        },
        getGame() {
            for (let elem of this.games){
                console.log(elem.id);
            }

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