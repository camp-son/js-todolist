import EventChannel from "../common/EventChannel.js";
import { EventType } from "../constant/EventType.js";

const initialDataUrl = `http://${location.hostname}:${location.port}/data/init.json`;

export class TodoModel extends EventChannel {
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
        this.publish(EventType.LISTENING_TODOS, this.todos);
    }
}