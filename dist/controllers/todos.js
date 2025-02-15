"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const { text, id } = req.body;
    const newTodo = new todo_1.Todo(id ? id : Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: "craete new todo", createdTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    if (!TODOS.length)
        throw new Error("not todo found");
    else {
        res.status(201).json({ todos: TODOS });
    }
};
exports.getTodos = getTodos;
const updateTodo = (req, res, next) => {
    const { id } = req.params;
    if (!TODOS.find((val) => val.id === id))
        throw new Error("todo no found");
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => { };
exports.deleteTodo = deleteTodo;
