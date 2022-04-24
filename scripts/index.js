import Engine from "./classes/engine.js"

const engine = new Engine({
    size: {
        width: 50, //width: 91,
        height: 25 //height: 50
    },
    canvas: document.getElementById('canvas')
})
window.engine = engine
engine.init()