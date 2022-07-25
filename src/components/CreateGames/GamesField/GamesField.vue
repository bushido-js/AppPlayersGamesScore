<template>
    <ul class="list-group ulGame" v-if="games.length">
        <li class="list-group-item liGame">
            <div class="row wrapper mt-1">
                <div class="col-5 border">
                    <div class="row" >

                        <div class="col-6 name-first-player">
                            <div v-for="firstMember of players" >
                                <div v-if="firstMember.id == firstSelected">
                                    <strong>{{firstMember.name}}</strong>
                                    <span class="badge bg-primary rounded-pill">{{firstMember.win}}</span>
                                    /
                                    <span class="badge bg-danger rounded-pill">{{firstMember.loss}}</span>                                
                                </div>
                            </div>
                        </div>

                        <div class="col-6 points fitst-player" v-for="point of getGamePointsById(games)">
                            <div id="p1g1" class="" @click="onClick(point)"></div>  
                        </div>

                    </div>
                </div>

                <div class="col-2 position-relative">
                    <h3 class="position-absolute top-50 start-50 translate-middle">vs</h3>
                </div>

                <div class="col-5 border" >
                    <div class="row" >

                        <div class="col-6 points second-player">
                            <div id="p2g1" class="" ></div>
                            <div id="p2g2" class=""></div>
                            <div id="p2g3" class=""></div>
                        </div>

                        <div class="col-6 name-second-player" >
                            <div v-for="secondMember of players" >
                                <div v-if="secondMember.id == secondSelected">
                                    <strong>{{secondMember.name}}</strong>
                                    <span class="badge bg-primary rounded-pill">{{secondMember.win}}</span>
                                    /
                                    <span class="badge bg-danger rounded-pill">{{secondMember.loss}}</span>
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
    props: {
        'players': Array,
        'games': Array,
        'firstSelected': '',
        'secondSelected': ''
    },
    methods: {
        onClick() {
            getGamePointsById(games).push(1)
        },
        getGamePointsById (arr) {
            let arr1 = arr.filter(obj => obj.id === 1)
            return arr1.pointsFirstUser
        }
    },
}

</script>

<style scoped>
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
.win {
    background-color: #10ed10;
}
.loss {
    background-color: rgb(223, 7, 7);
}
</style>