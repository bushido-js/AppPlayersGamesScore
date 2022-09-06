<template>
    <div >
        <TournamentCreator />
        <hr class="mt-2">
        <GameField
            :players="playersForTourney"
            :games="currentTourney"

            @sendInfoGame="sendInfoGamesTourneys"
        />
        
        <div class="observation" v-if="isOverTourney"></div>
        <!-- <div class="row">
            <div class="col-12">
                <a href="#" onclick="location.reload(); return false;">
                        <button type="submit" class="btn btn-outline-primary align-middle" :class="{disabled: isDisable}" id="restart">
                        <h4>
                            Обновить страницу
                        </h4>
                    </button>
                </a>
            </div>
        </div> -->
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default{
    components: {
    TournamentCreator: () => import("./TournamentCreator/TournamentCreator.vue"),
    GameField: () => import("../Games/GameField/GameField.vue"),
    },
    data(){
        return{
            isDisable: true
        }
    },
    computed:{
        playersForTourney(){
            return this.$store.state.playersForTourney
        },
        currentTourney(){
            return this.$store.getters.currentTourney 
        },
        playersForTourney(){
            return this.$store.state.playersForTourney
        },
        isOverTourney(){
            if (!this.currentTourney) {
                return false
            }
            let arr = []
            for (let elem of this.currentTourney){
                arr.push(elem.isOverGame)
            }
            let arr2 = arr.filter(item => item == true)
            if (arr.length === arr2.length){
                this.getTheTournamentWinner()
            }
        }
    },
    methods: {
        ...mapActions(['addExtraGame', 'playGameTourneys', 'createExtraGames', 'clearListTourney']),
        getTheTournamentWinner(){
            const players = this.playersForTourney
            console.log('this.playersForTourney', this.playersForTourney);
            
            let arr = this.listPlayersAndCountWinGames(players)
            console.log('ARRR', arr);
            if (arr.length >= 2){
                return this.createExtraGames(arr);
            }

            return this.gettingTourneyWinner(arr);
        },
            gettingTourneyWinner(arr){
                const winnerId = Number(arr[0])
                let winnerObj = {};
                this.playersForTourney.forEach(function(item){
                    if(item.id === winnerId){
                        winnerObj = item
                    }
                })
                this.isDisable = false;
                // this.clearListTourney()
                alert('Победитель турнира - ' + winnerObj.name + '!')
                return location.reload()
            },
            listPlayersAndCountWinGames(arr){
                const listPlayers = {};
                arr.forEach(function(item){
                    const name = item.id
                    const winGame = item.winGame
                    listPlayers[name] = winGame
                })
                return this.findPlayerIdWithMaxPoint(listPlayers);
            },
            findPlayerIdWithMaxPoint(obj){
                const maxValue = Math.max.apply(null, Object.values(obj))
                return Object.keys(obj).filter(k => obj[k] === maxValue)
            },
        sendInfoGamesTourneys(game, userId) {
            this.playGameTourneys({game, userId})
        },
        
    },
}
</script>
<style >
    #restart{
        height: 64px;
        width: 100%;
    }
</style>
