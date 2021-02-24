export class ListView {
    constructor() {
        this.listElement = document.querySelector('.todolist');
        this.todoList = null;
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