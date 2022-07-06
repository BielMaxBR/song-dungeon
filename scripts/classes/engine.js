import MapManager from "./mapManager.js"
import ChildrenManager from "./childrenManager.js"
import { objects } from "./utils/objects.js"
import Vector from "./utils/Vector.js"

export default class Engine {
    constructor(config) {
        this.canvas = config?.canvas || null
        this.size = config?.size || { width: 50, height: 50 }

        this.map = new Map()
        this.children = []

        this.mapManager = new MapManager(this.map)
        this.childrenManager = new ChildrenManager(this.children)

        this.objects = objects

        this.ctx = null
        this.offset = config?.offset || new Vector(4, -2)
    }

    init() {

        console.log('iniciando setup')
        this.createCanvas()
        console.log('setup pronto')
        console.log('iniciando loop')
        this.initLoop()
    }

    createCanvas() {
        let canvas = this.canvas

        if (canvas == null) {
            console.log('criando canvas')

            canvas = document.createElement('canvas')
            this.canvas = canvas
            canvas.id = 'canvas'
            document.body.appendChild(canvas)
        }
        canvas.height = window.innerHeight
        canvas.width = canvas.height
        this.fontSize = Math.floor(this.canvas.height / this.size.height)
        this.ctx = canvas.getContext("2d")
    }

    render() {
        // inserir o https://github.com/fionnfuchs/ascii-canvas-js
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = "white"
        this.ctx.font = `normal ${this.fontSize - 3}px monospace`
        for (let y = 0; y < this.size.height; y++) {
            for (let x = 0; x < this.size.width; x++) {
                const tile = this.map.get(`${x},${y}`)
                const char = tile?.char || "╬"

                const charX = (this.fontSize / 2 * x) + this.offset.x
                const charY = ((this.size.height + 1) * (y + 1)) + this.offset.y

                // background
                this.ctx.fillStyle = tile?.bgcolor || "black" // `rgb(${10 * y},${10 * x},${10 * x})`
                this.ctx.fillText("█", charX, charY)
                // char
                this.ctx.fillStyle = tile?.color || "white" // `rgb(${12 * x},${12 * y},${12 * y})`
                this.ctx.fillText(char, charX, charY)
            }

        }    }

    mainLoop(delta) {
        for (const child of this.children) {
            child.update(delta)
        }

    }

    mapUpdate() {
        this.map.clear()
        for (const child of this.children) {
            child.render(this.mapManager)
            this.mapManager.addHString("PERDI", 4,13,"green","yellow")

        }
    }

    initLoop() {
        console.log('loop rodando')
        let DrawlastUpdate = 0

        const Drawloop = () => {
            let delta = performance.now() - DrawlastUpdate
            this.mainLoop(delta)
            this.mapUpdate()
            this.render(delta)
            DrawlastUpdate = performance.now()
            console.log(Math.floor(delta))
            window.requestAnimationFrame(Drawloop)
        }
        DrawlastUpdate = performance.now()

        Drawloop()
    }
}
