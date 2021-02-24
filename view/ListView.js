export class ListView {
    constructor(todoModel, foldModel) {
        this.listElement = document.querySelector('.todolist');
        this.todoList = null;

        this.todoModel = todoModel;
        this.foldModel = foldModel;

        this.subscribe();
    }

    subscribe() {
        this.todoModel.subscribe((todoList) => {
            this.render(todoList);
        });

        this.foldModel.subscribe((isFold) => {
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