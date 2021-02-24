import { EventType } from "../constant/EventType.js";

export class InputView {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;

        this.regButton = document.querySelector('button[name=register]');
        this.inputElement = document.querySelector('input[name=todo]');

        this.initEvent();
    }

    initEvent() {
        this.regButton.addEventListener('click', (e) => {
            const todoText = this.getTodoValue();
            this.dispatcher.dispatch(EventType.ADD_BUTTON, todoText);
            this.render();
        });

        this.inputElement.addEventListener('keydown', (e) => {
            if (e.keyCode !== 13) return;
            const todoText = this.getTodoValue();
            this.dispatcher.dispatch(EventType.CHANGE_TODO_LIST, todoText);
            this.render();
        });
    }

    getTodoValue() {
        return this.inputElement.value;
    }

    render(inputData = "") {
        this.inputElement.value = inputData;
    }
}