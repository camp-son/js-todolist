import { EventType } from "../constant/EventType";

export class ListFoldButtonView {
    constructor(foldModel) {
        this.foldButton = document.querySelector('.fold');

        this.foldModel = foldModel;

        this.initEvents();
        this.subscribe();
    }

    subscribe() {
        this.foldModel.subscribe(EventType.CHANGE_FOLD, (isFold) => {
            this.render(isFold);
        });
    }

    initEvents() {
        this.foldButton.addEventListener('click', () => {
            this.foldModel.toggleFold.call(this.foldModel);
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