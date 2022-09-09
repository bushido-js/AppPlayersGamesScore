export default class Tourney{

    static indexTourney = 1

    #id = games
    constructor(){
        this.#id = Tourney.indexTourney;
        Tourney.indexTourney++
        games = [];
    }
}