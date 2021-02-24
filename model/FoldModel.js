import EventChannel from "../common/EventChannel.js";
import { EventType } from "../constant/EventType.js";

export class FoldModel extends EventChannel {
    constructor() {
        super();
        this.isFold = false;
    }

    get fold() {
        return this.isFold;
    }

    toggleFold() {
        this.isFold = !this.isFold;
        this.publish(EventType.CHANGE_FOLD, this.isFold);
    }
}