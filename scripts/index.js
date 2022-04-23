import Engine from "./engine.js"

const engine = new Engine({
    size: {
        width: 50,
        height: 50
    },
    canvas: document.getElementById('canvas')
})

engine.init()