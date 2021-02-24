import EventChannel from "../common/EventChannel.js";
import { EventType } from "../constant/EventType.js";

export class TodoModel extends EventChannel {
    constructor(url) {
        super();
        this.todos = [];
        this.url = url;
    }

    get todoList() {
        return this.todos;
    }

    getInitialDataHandler() {
        fetch(this.url).then(res => res.json()).then(todos => {
            for (const todo of todos) {
                this.addTodo.call(this, todo);
            }
        });        
    }

    saveInitData(data) {
        this.todos = data;
        this.publish(EventType.FETCH_INIT_DATA, this.todos);
    }

    addTodo(todo) {
        if (!todo) return ;
        this.todos = [...this.todos, todo];
        this.publish(EventType.CHANGE_TODO_LIST, this.todos);
    }
}