export default class GameObject {
    constructor({ renderType, char, x, y, color, bcolor, ...args }) {
        this.renderType = renderType
        this.char = char
        this.x = x
        this.y = y
        this.color = color
        this.bcolor = bcolor
        this.args = args
    }
}