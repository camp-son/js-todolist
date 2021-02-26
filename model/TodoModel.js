import EventChannel from "../common/EventChannel.js";
import { EventType } from "../constant/EventType.js";

export class TodoModel extends EventChannel {
    STORAGE_KEY = 'todos';

    constructor(url) {
        super();
        this.todos = [];
        this.url = url;
    }

    get todoList() {
        return this.todos;
    }

    get uniqueId() {
        return (Math.max(...this.todos.map(({id}) => id)) || 0) + 1;
    }

    getInitialDataHandler() {
        fetch(this.url).then(res => res.json()).then(todos => {
            const storeTodos = JSON.parse(localStorage.getItem(this.STORAGE_KEY));

            storeTodos.reduce((summary, storeTodo) => {
                const todo = todos.find((t) => t.id === storeTodo.id);

                if (todo) {
                    summary.push({...storeTodo, ...todo});
                } else {
                    summary.push(storeTodo);
                }

                return summary;
            }, []).forEach((todo) => {
                this.addTodo.call(this, todo);
            });
        });
    }

    saveInitData(data) {
        this.todos = data;
        this.publish(EventType.FETCH_INIT_DATA, this.todos);
    }

    addTodo({id, title, status}) {
        if (!title) return ;

        this.todos = [...this.todos, {id: id || this.uniqueId, title: title, status: status || 'todo'}];

        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
        this.publish(EventType.CHANGE_TODO_LIST, this.todos);
    }

    doneTodo(doneId) {
        const findTodo = this.todos.find(({id}) => id === Number(doneId));

        if (findTodo) {
            findTodo.status = 'done';

            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todos));
            this.publish(EventType.CHANGE_TODO_LIST, this.todos);
        }
    }
}