export class TodoModel {
    constructor() {
        this.todos = [];
    }

    get todoList() {
        return this.todos;
    }

    addTodo(todo, callback) {
        this.todos = [...this.todos, todo];
        callback(this.todos);
    }
}