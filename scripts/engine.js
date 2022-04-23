export default class Engine {
    constructor(config) {
        this.canvas = config?.canvas || null
        this.size = config?.size || {width: 50, height: 50}
        
        this.ctx = null
    }

    init() {
    }
}