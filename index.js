import { TodoController } from "./controller/TodoController.js";
import { FoldModel } from "./model/FoldModel.js";
import { TodoModel } from "./model/TodoModel.js";
import { InputView } from "./view/InputView.js";
import { ListFoldButtonView } from "./view/ListFoldButtonView.js";
import { ListView } from "./view/ListView.js";

const initialDataUrl = `http://${location.hostname}:${location.port}/data/init.json`;

const todoModel = new TodoModel();
const foldModel = new FoldModel();

const inputView = new InputView();
const listView = new ListView();
const foldButtonView = new ListFoldButtonView();

const todoController = new TodoController(todoModel, foldModel, inputView, listView, foldButtonView);
todoController.getInitData(initialDataUrl);