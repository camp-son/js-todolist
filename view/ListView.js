import { EventType } from "../constant/EventType.js";

export class ListView {
    constructor(dispatcher, todoModel, foldModel) {
        this.dispatcher = dispatcher;

        this.listElement = document.querySelector('.todolist');
        this.todoList = null;

        this.todoModel = todoModel;
        this.foldModel = foldModel;

        this.subscribe();
    }

    subscribe() {
        this.todoModel.subscribe(EventType.CHANGE_TODO_LIST, (todoList) => {
            this.render(todoList);
        });

        this.todoModel.subscribe(EventType.FETCH_INIT_DATA, (todoList) => {
            this.render(todoList);
        });

        this.foldModel.subscribe(EventType.CLICK_TOGGLE_BUTTON, (isFold) => {
            this.toggle(isFold);
        });
    }

    render(todoList) {
        const listHTML = todoList
            .filter(({status}) => status === 'todo')
            .reduce((html, todo) => `${html} <li id="${todo.id}"> ${todo.title} <span class="deleteX"> X </span> </li>`, '');

        this.todoList = todoList;
        this.listElement.innerHTML = listHTML;

        this.listElement.querySelectorAll('.deleteX').forEach((elem) => {
            elem.addEventListener('click', () => {
                this.dispatcher.dispatch(EventType.DELETE_BUTTON, elem.parentElement.getAttribute('id'));
            });
        });
    }

    toggle(isFold) {
        if (isFold) {
            this.listElement.style.display = 'none';
        } else {
            this.listElement.style.display = 'block';
        }
    }
}