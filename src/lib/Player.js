export default class Player {

    static indexPlayer = 0;

    #id = null;
    #name = null;
    #winRound = 0;
    #lossRound = 0;
    #winGame = 0;

    get id() {
        return this.#id;
    }
    
    get name() {
        return this.#name;
    }
    
    get winRound() {
        return this.#winRound;
    }
    
    get lossRound() {
        return this.#lossRound;
    }
    
    get winGame() {
        return this.#winGame;
    }

    constructor(name) {
        this.#id = Player.indexPlayer;
        Player.indexPlayer++;
        this.#name = name;
    }

    addPoints(wonRounds, lossRounds) {
        this.#lossRound += lossRounds;
        this.#winRound += wonRounds;
        this.#winGame += wonRounds >= 2 ? 1 : 0;
    }

    getString() {
        return this.#id + " " + this.#name;
    }
}