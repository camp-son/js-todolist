import { EventType } from "../constant/EventType.js";

export class ListFoldButtonView {
    constructor(dispatcher, foldModel) {
        this.dispatcher = dispatcher;
        this.foldButton = document.querySelector('.fold');

        this.foldModel = foldModel;

        this.initEvents();
        this.subscribe();
    }

    subscribe() {
        this.foldModel.subscribe(EventType.CLICK_TOGGLE_BUTTON, (isFold) => {
            this.render(isFold);
        });
    }

    initEvents() {
        this.foldButton.addEventListener('click', () => {
            this.dispatcher.dispatch(EventType.CLICK_TOGGLE_BUTTON);
        });
    }

    render(isFold) {
        if (isFold) {
            this.foldButton.innerHTML = '펼치기';
        } else {
            this.foldButton.innerHTML = '접기';
        }
    }
}