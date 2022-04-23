import Engine from "./engine.js"

const engine = new Engine({
    size: {
        width: 25,
        height: 25
    },
    canvas: document.getElementById('canvas')
})

engine.init()