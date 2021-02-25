import { EventType } from "../constant/EventType.js";

export default class ActionDispatcher {
    constructor({todoModel, foldModel}) {
        this.todoModel = todoModel;
        this.foldModel = foldModel;
    }

    dispatch(eventType, data) {
        console.log('dispatch event type', eventType);

        switch(eventType) {
            case EventType.ADD_BUTTON:
            case EventType.CHANGE_TODO_LIST:
                this.todoModel.addTodo({title: data});
                break;
            case EventType.DELETE_BUTTON:
                this.todoModel.doneTodo(data);
                break;
            case EventType.FETCH_INIT_DATA:
                this.todoModel.getInitialDataHandler();
                break;
            case EventType.CLICK_TOGGLE_BUTTON:
                this.foldModel.toggleFold();
                break;
        }
    }
}