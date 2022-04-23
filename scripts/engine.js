export default class Engine {
    constructor(config) {
        this.canvas = config?.canvas || null
        this.size = config?.size || { width: 50, height: 50 }

        this.ctx = null

        this.map = []

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
        this.ctx.font = `normal ${this.fontSize}px monospace`
        for (let y = 1; y < this.size.height+1; y++) {
            let row = ""
            for (let x = 1; x < this.size.width+1; x++) {
                row += (y%2 == 0)-x%2 == 0 ? "#" : "█"
            }
            this.ctx.fillText(row, this.fontSize/4, (this.fontSize)*y)
            
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