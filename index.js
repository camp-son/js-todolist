// import { TodoController } from "./controller/TodoController.js";
import ActionDispatcher from "./common/ActionDispatcher.js";
import { EventType } from "./constant/EventType.js";
import { FoldModel } from "./model/FoldModel.js";
import { TodoModel } from "./model/TodoModel.js";
import { CounterView } from "./view/CounterView.js";
import { InputView } from "./view/InputView.js";
import { ListFoldButtonView } from "./view/ListFoldButtonView.js";
import { ListView } from "./view/ListView.js";

const initialDataUrl = `http://${location.hostname}:${location.port}/data/init.json`;

const todoModel = new TodoModel(initialDataUrl);
const foldModel = new FoldModel();

const dispatcher = new ActionDispatcher({todoModel, foldModel});

new InputView(dispatcher);
new ListView(dispatcher, todoModel, foldModel);
new ListFoldButtonView(dispatcher, foldModel);
new CounterView(dispatcher, todoModel);

document.addEventListener('DOMContentLoaded', () => {
    dispatcher.dispatch(EventType.FETCH_INIT_DATA);
});
