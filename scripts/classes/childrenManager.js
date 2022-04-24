import GameObject from "./objects/Object.js"

export default class ChildrenManager {
    constructor(children) {
        this.children = children
    }
    append(object = GameObject){
        this.children.push(object)
    }
}