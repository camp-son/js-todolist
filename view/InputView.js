export class InputView {
    constructor() {
        this.regButton = document.querySelector('button[name=register]');
        this.inputElement = document.querySelector('input[name=todo]');
        this.addTodoHandler = null;

        this.initEvent();
    }

    initEvent() {
        this.regButton.addEventListener('click', (e) => {
            const todoText = this.getTodoValue();
            this.addTodoHandler(todoText);
        });

        this.inputElement.addEventListener('keydown', (e) => {
            if (e.keyCode !== 13) return;
            const todoText = this.getTodoValue();
            this.addTodoHandler(todoText);
        });
    }

    getTodoValue() {
        return this.inputElement.value;
    }

    render(inputData = "") {
        this.inputElement.value = inputData;
    }
}