import Game from "./Game";
import Player from "./Player";

export default class Tourney{

    static indexTourney = 1

    id = null;
    tourneyGames = [];
    players = null;
    #flag = 'flag';
    #isOverTourney = false;
    constructor(playersForTourney){
        this.id = Tourney.indexTourney;
        Tourney.indexTourney++;
        this.players = playersForTourney;
    }

    tourneyGamesOn(){
        let arr = this.players;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                this.addGameTourney(arr[i], arr[j]);
            }
        }
    }

    getWinner(){
        const players = this.players
        const arr = this.listPlayersAndCountWinGames(players);
        if (arr.length >= 2){
            return this.createExtraGames(arr, players);
        }
        return this.gettingTourneyWinner(arr, players)
    }

        gettingTourneyWinner(arr, players){
            const winnerId = Number(arr[0])
            let winnerObj = {};
            players.forEach(function(item){
                if(item.id === winnerId){
                    winnerObj = item
                }
            })
            players = [];
            alert('Победитель турнира - ' + winnerObj.name + '!');
            this.#isOverTourney = true;
            // return location.reload();
        }

        listPlayersAndCountWinGames(arr){
            const listPlayers = {};
            arr.forEach(function(item){
                const name = item.id;
                const winGame = item.winGameTourney;
                listPlayers[name] = winGame;
            })
            return this.findPlayerIdWithMaxPoint(listPlayers);
        }

        findPlayerIdWithMaxPoint(obj){
            const maxValue = Math.max.apply(null, Object.values(obj));
            return Object.keys(obj).filter(k => obj[k] === maxValue);
        }


    createExtraGames(arr, players){
        let playersForExtraGames = [];
        arr.forEach(function(item){
            let playerId = Number(item);
            players.forEach(function(elem){
                if(elem.id === playerId){
                    playersForExtraGames.push(elem);
                }
            })
        })
        
        let extraArr = playersForExtraGames
        for (let i = 0; i < extraArr.length - 1; i++) {
            for (let j = i + 1; j < extraArr.length; j++) {
                this.addGameTourney(extraArr[i], extraArr[j])
            }
        };
        playersForExtraGames = [];
    }

        addGameTourney(firstPlayer, secondPlayer) {
            this.tourneyGames.push(new Game(firstPlayer, secondPlayer, this.#flag));
        }
    
}