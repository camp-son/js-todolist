import Observable from "../common/Observable.js";

const initialDataUrl = `http://${location.hostname}:${location.port}/data/init.json`;

export class TodoModel extends Observable {
    constructor() {
        super();
        this.todos = [];
    }

    get todoList() {
        return this.todos;
    }

    getInitialDataHandler() {
        fetch(initialDataUrl).then(res => res.json()).then(todos => {
            for (const todo of todos) {
                this.addTodo.call(this, todo);
            }
        });        
    }

    addTodo(todo) {
        this.todos = [...this.todos, todo];
        this.notify(this.todos);
    }
}