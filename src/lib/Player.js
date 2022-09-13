export default class Player {

    static indexPlayer = 1;

    #id = null;
    #name = null;
    winRound = 0;
    lossRound = 0;
    winGame = 0;
    winGameTourney = 0;
    // isOverTourney = false;

    
    constructor(name) {
        this.#id = Player.indexPlayer;
        Player.indexPlayer++;
        this.#name = name;
    }
    
    get id() {
        return this.#id;
    }
    
    get name() {
        return this.#name;
    }
    
    addPoints(wonRounds, lossRounds, flag) {
        if(flag === 'flag'){
            this.lossRound += lossRounds;
            this.winRound += wonRounds;
            this.winGame += wonRounds >= 2 ? 1 : 0;
            this.winGameTourney += wonRounds >= 2 ? 1 : 0;
            // if(this.isOverTourney){
            //     this.winGameTourney = 0
            // }
            
        } else {
            this.lossRound += lossRounds;
            this.winRound += wonRounds;
            this.winGame += wonRounds >= 2 ? 1 : 0;
        }
    }

    getString() {
        return this.#id + " " + this.#name;
    }
}