import Engine from "./classes/engine.js"
import Vector from "./classes/utils/Vector.js"
import starzinha from "./classes/objects/starzinha.js"

const engine = new Engine({
    size: {
        width: 50, //width: 91,
        height: 25 //height: 50
    },
    canvas: document.getElementById('canvas')
})
window.engine = engine

const star = new starzinha(new Vector(13, 13))
engine.childrenManager.append(star)
engine.mapManager.add("*", 13, 13)
engine.init()
