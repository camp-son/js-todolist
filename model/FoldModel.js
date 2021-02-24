import Observable from "../common/Observable.js";

export class FoldModel extends Observable {
    constructor() {
        super();
        this.isFold = false;
    }

    get fold() {
        return this.isFold;
    }

    toggleFold() {
        this.isFold = !this.isFold;
        this.notify(this.isFold);
    }
}