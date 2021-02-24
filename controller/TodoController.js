export class TodoController {
    constructor(todoModel, foldModel, inputView, listView, foldButton) {
        this.todoModel = todoModel;
        this.foldModel = foldModel;

        this.inputView = inputView;
        this.listView = listView;
        this.foldButton = foldButton;

        this.initService();
    }

    getInitData(initialDataUrl) {
        fetch(initialDataUrl).then(res => res.json()).then(data => {
            for (let i = 0; i < data.length; i++) {
                this.todoModel.addTodo.call(this.todoModel, data[i], this.afterAddTodo.bind(this));
            }
        });
    }

    initService() {
        this.inputView.addTodoHandler = this.addTodoHandler.bind(this);
        this.foldButton.addFoldHandler = this.addFoldHandler.bind(this);
    }

    addTodoHandler(todoString) {
        if (!todoString) return;
        this.todoModel.addTodo.call(this.todoModel, todoString, this.afterAddTodo.bind(this));
    }

    afterAddTodo(todoArray) {
        this.renderInputView();
        this.renderListView(todoArray);
    }

    addFoldHandler() {
        this.foldModel.toggleFold.call(this.foldModel, this.afterToggleFold.bind(this));
    }

    afterToggleFold(isFold) {
        this.renderFoldButton(isFold);
    }

    renderInputView() {
        this.inputView.render();
    }

    renderListView(todoArray) {
        this.listView.render(todoArray);
    }

    renderFoldButton(isFold) {
        this.foldButton.render(isFold);
        this.listView.toggle(isFold);
    }
}