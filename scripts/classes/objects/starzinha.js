import GameObject from "./Object.js"
export default class Starzinha extends GameObject {
    constructor(position) {
        super(position)
    }
    render(mapManager) {
        const [x ,y] = this.position.toArray()
        mapManager.add("*", x, y, "yellow")
    }
}
