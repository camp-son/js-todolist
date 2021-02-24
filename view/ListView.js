import { EventType } from "../constant/EventType";

export class ListView {
    constructor(todoModel, foldModel) {
        this.listElement = document.querySelector('.todolist');
        this.todoList = null;

        this.todoModel = todoModel;
        this.foldModel = foldModel;

        this.subscribe();
        this.initEvents();
    }

    initEvents() {
        document.addEventListener('DOMContentLoaded', () => {
            this.getInitialDataHandler();
        });
    }

    getInitialDataHandler() {
        this.todoModel.getInitialDataHandler();
    }

    subscribe() {
        this.todoModel.subscribe(EventType.LISTENING_TODOS, (todoList) => {
            this.render(todoList);
        });

        this.foldModel.subscribe(EventType.CHANGE_FOLD, (isFold) => {
            this.toggle(isFold);
        });
    }

    render(todoList) {
        const listHTML = todoList.reduce((html, todo) => `${html} <li> ${todo} <span class="deleteX"> X </span> </li>`, '');

        this.todoList = todoList;
        this.listElement.innerHTML = listHTML;
    }

    toggle(isFold) {
        if (isFold) {
            this.listElement.style.display = 'none';
        } else {
            this.listElement.style.display = 'block';
        }
    }
}