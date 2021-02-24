import { TodoController } from "./controller/TodoController.js";
import { FoldModel } from "./model/FoldModel.js";
import { TodoModel } from "./model/TodoModel.js";
import { InputView } from "./view/InputView.js";
import { ListFoldButtonView } from "./view/ListFoldButtonView.js";
import { ListView } from "./view/ListView.js";

const initialDataUrl = `http://${location.hostname}:${location.port}/data/init.json`;

const todoModel = new TodoModel();
const foldModel = new FoldModel();

const inputView = new InputView(todoModel);
const listView = new ListView(todoModel, foldModel);
const foldButtonView = new ListFoldButtonView(foldModel);

// const todoController = new TodoController(todoModel, foldModel, inputView, listView, foldButtonView);
// todoController.getInitData(initialDataUrl);

fetch(initialDataUrl).then(res => res.json()).then(todos => {
    for (const todo of todos) {
        todoModel.addTodo.call(todoModel, todo);
    }
});