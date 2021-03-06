export default class MapManager {
    constructor(map) {
        this.map = map
    }
    // código roubado roubado >:)
    add(char, x, y, color, bgcolor) {
        if (typeof (x) != "number" || typeof (y) != "number") return "error"
        this.map.set(`${x},${y}`, { char: char[0], color, bgcolor })
        // console.log("map", this.map) 
    }
    addRect(char, x, y, w, h, color, bgcolor) {
        if (typeof (x) != "number" || typeof (y) != "number") return "error"
        for (var _x = 0; _x < w; _x++) {
            for (var _y = 0; _y < h; _y++) {
                this.map.set(`${x + _x},${y + _y}`, { char: char[0], color, bgcolor })
            }
        }
    }
    addStrokeRect(char, x, y, w, h, color, bgcolor) {
        if (typeof (x) != "number" || typeof (y) != "number") return "error"
        for (var _x = 0; _x < w; _x++) {
            for (var _y = 0; _y < h; _y++) {
                if (_x == 0 || _y == 0 || _x == w - 1 || _y == h - 1) {
                    this.map.set(`${x + _x},${y + _y}`, { char: char[0], color, bgcolor })
                }
            }
        }
    }
    addHString(text, x, y, color, bgcolor) {
        if (typeof (x) != "number" || typeof (y) != "number") return "error"
        for (var _x = 0; _x < text.length; _x++) {
            this.map.set(`${x + _x},${y}`, { char: text.charAt(_x), color, bgcolor })
        }
    }
    addVString(text, x, y, color, bgcolor) {
        if (typeof (x) != "number" || typeof (y) != "number") return "error"
        for (var _y = 0; _y < text.length; _y++) {
            this.map.set(`${x},${y + _y}`, { char: text.charAt(_y), color, bgcolor })
        }
    }
}
