export default class Engine {
    constructor(config) {
        this.canvas = config?.canvas || null
        this.size = config?.size || { width: 50, height: 50 }

        this.ctx = null
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
        this.ctx = canvas.getContext("2d")
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.font = "bold 70px courier mono"
        this.ctx.fillStyle = "white"
        this.ctx.fillText("#", 0, this.canvas.height)
    }

    initLoop() {
        console.log('loop rodando')
        let UpdatelastUpdate = 0
        let DrawlastUpdate = 0

        const Updateloop = () => {
            let delta = performance.now() - UpdatelastUpdate

            // this.update(delta)

            UpdatelastUpdate = performance.now()
            setTimeout(Updateloop, 1000 / 60)
        }

        const Drawloop = () => {
            let delta = performance.now() - DrawlastUpdate

            this.render(delta)

            DrawlastUpdate = performance.now()

            setTimeout(Drawloop, 1000 / 60)
        }
        UpdatelastUpdate = performance.now()
        DrawlastUpdate = performance.now()

        Updateloop()
        Drawloop()
    }
}