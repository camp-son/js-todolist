import Observable from "../common/Observable.js";

export class TodoModel extends Observable {
    constructor() {
        super();
        this.todos = [];
    }

    get todoList() {
        return this.todos;
    }

    addTodo(todo) {
        this.todos = [...this.todos, todo];
        this.notify(this.todos);
    }
}