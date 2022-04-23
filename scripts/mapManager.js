export default class Manager {
    constructor(map) {
        this.map = map
    }

    put(char = String, x = Number, y = Number, color = String, bgcolor = String) {
        this.map[[x,y]] = {char: char[0], color, bgcolor}
    }
}