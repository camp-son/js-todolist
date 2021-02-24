export class ListFoldButtonView {
    constructor() {
        this.foldButton = document.querySelector('.fold');
        this.addFoldHandler = null;

        this.initEvents();
    }

    initEvents() {
        this.foldButton.addEventListener('click', () => {
            this.addFoldHandler();
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