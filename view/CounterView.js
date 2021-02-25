import { EventType } from "../constant/EventType.js";

export class CounterView {
    constructor(dispatcher, todoModel) {
        this.dispatcher = dispatcher;
        this.todoModel = todoModel;

        this.todoElement = document.querySelector('.todo-count');
        this.doneElement = document.querySelector('.done-count');

        this.subscribe();
    }

    subscribe() {
        this.todoModel.subscribe(EventType.CHANGE_TODO_LIST, (todos) => {
            this.render(todos);
        });

        this.todoModel.subscribe(EventType.FETCH_INIT_DATA, (todos) => {
            this.render(todos);
        });
    }

    render(todos) {
        this.todoElement.innerHTML = todos.filter(({status}) => status === 'todo').length;
        this.doneElement.innerHTML = todos.filter(({status}) => status === 'done').length;
    }
}