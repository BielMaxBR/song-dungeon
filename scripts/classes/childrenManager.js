export default class ChildrenManager {
    constructor(children) {
        this.children = children
    }
    append(object){
        this.children.push(object)
    }
}
