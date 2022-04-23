import Engine from "./engine.js"

const engine = new Engine({
    size: {
        width: 91,
        height: 50
    },
    canvas: document.getElementById('canvas')
})
window.engine = engine
engine.init()