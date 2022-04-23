export default class Manager {
    constructor(map) {
        this.map = map
    }

    add(char = String, x = Number, y = Number, color = String, bgcolor = String) {
        this.map[[x, y]] = { char: char[0], color, bgcolor }
    }
    addRect(char = String, x = Number, y = Number, w = Number, h = Number, color = String, bgcolor = String) {
        for (var _x = 0; _x < w; _x++) {
            for (var _y = 0; _y < h; _y++) {
                this.map[[x + _x, y + _y]] = { char: char[0], color, bgcolor };
            }
        }
    }
    addStrokeRect(char = String, x = Number, y = Number, w = Number, h = Number, color = String, bgcolor = String) {
        for (var _x = 0; _x < w; _x++) {
            for (var _y = 0; _y < h; _y++) {
                if (_x == 0 || _y == 0 || _x == w - 1 || _y == h - 1) {
                    this.map[[x + _x, y + _y]] = { char: char[0], color, bgcolor };
                }
            }
        }
    }
    addHString(text = String, x = Number, y = Number, color = String, bgcolor = String) {
        for (var _x = 0; _x < text.length; _x++) {
            this.map[[x + _x, y]] = { char: text.charAt(_x), color, bgcolor };
        }
    }
}