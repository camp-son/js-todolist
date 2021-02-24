export class TodoController {
    constructor(todoModel, foldModel, inputView, listView, foldButton) {
        this.todoModel = todoModel;
        this.foldModel = foldModel;

        this.inputView = inputView;
        this.listView = listView;
        this.foldButton = foldButton;

        this.initService();
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