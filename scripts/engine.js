import Manager from "./mapManager.js"

export default class Engine {
    constructor(config) {
        this.canvas = config?.canvas || null
        this.size = config?.size || { width: 50, height: 50 }

        this.ctx = null

        this.map = []

        this.manager = new Manager(this.map)

        this.offset = config?.offset || { x: 4, y: -2 }
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
                const tile = this.map[[x, y]]
                const char = tile?.char || "╬"

                const charX = (this.fontSize / 2 * x) + this.offset.x
                const charY = ((this.size.height + 1) * (y + 1)) + this.offset.y

                // background
                this.ctx.fillStyle = tile?.bgcolor || `rgb(${10 * y},${10 * x},${10 * x})`
                this.ctx.fillText("█", charX, charY)
                // char
                this.ctx.fillStyle = tile?.color || `rgb(${12 * x},${12 * y},${12 * y})`
                this.ctx.fillText(char, charX, charY)
            }

        }
    }

    initLoop() {
        console.log('loop rodando')
        let DrawlastUpdate = 0

        const Drawloop = () => {
            let delta = performance.now() - DrawlastUpdate

            this.render(delta)

            DrawlastUpdate = performance.now()

            setTimeout(Drawloop, 1000 / 60)
        }
        DrawlastUpdate = performance.now()

        Drawloop()
    }
}