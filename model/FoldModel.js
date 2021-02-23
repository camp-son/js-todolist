export class FoldModel {
    constructor() {
        this.isFold = false;
    }

    get fold() {
        return this.isFold;
    }

    toggleFold(callback) {
        this.isFold = !this.isFold;
        callback(this.isFold);
    }
}