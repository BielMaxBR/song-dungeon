import MapManager from "./mapManager.js"
import ChildrenManager from "./childrenManager.js"
import { objects } from "./utils/objects.js"

export default class Engine {
    constructor(config) {
        this.canvas = config?.canvas || null
        this.size = config?.size || { width: 50, height: 50 }

        this.map = []
        this.children = []

        this.mapManager = new MapManager(this.map)
        this.childrenManager = new ChildrenManager(this.children)

        this.objects = objects
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

        if (canvas != null) {
            console.log('criando canvas')
            canvas.innerHTML = ''

            for (let y = 0; y < this.size.height; y++) {
                let line = document.createElement('li')
                line.setAttribute("id", "line")

                for (let x = 0; x < this.size.width; x++) {
                    const letter = document.createElement('a')

                    letter.setAttribute("id", "letter")
                    letter.setAttribute("class", `x${x}y${y}`)
                    letter.innerText = y % 2 == 0 ? "a" : "A"
                    line.appendChild(letter)
                }
                canvas.appendChild(line)

            }
        }
    }

    render() {
        for (let y = 0; y < this.size.height; y++) {
            for (let x = 0; x < this.size.width; x++) {
                const tile = this.map[[x, y]]
                const char = tile?.char || "╬"

                const letter = document.getElementsByClassName(`x${x}y${y}`)[0]
                if (!letter) continue

                // background
                letter.style.backgroundColor = tile?.bgcolor || "black" // `rgb(${10 * y},${10 * x},${10 * x})`
                // char
                letter.style.color = tile?.color || "white" // `rgb(${12 * x},${12 * y},${12 * y})`
                letter.innerText = char
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