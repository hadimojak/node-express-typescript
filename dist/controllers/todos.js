"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
const todo_1 = require("../models/todo");
const TODOS = [];
const createTodo = (req, res, next) => {
    const { text, id } = req.body;
    const newTodo = new todo_1.Todo(text, id ? id.toString() : Math.random().toString());
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
    const { text } = req.body;
    if (!TODOS.find((val) => val.id.toString() === id.toString()))
        throw new Error("todo no found");
    else {
        const index = TODOS.findIndex((val) => val.id.toString() === id.toString());
        if (TODOS.findIndex((val) => val.id.toString() === id.toString()) > -1) {
            TODOS[index] = { text: text ? text : TODOS[index].text, id };
        }
        res.status(301).json({ message: `todo ${id} updated` });
    }
    return;
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const { id } = req.params;
    if (!TODOS.find((val) => val.id.toString() === id.toString()))
        throw new Error("todo no found");
    else {
        const index = TODOS.findIndex((val) => val.id.toString() === id.toString());
        if (TODOS.findIndex((val) => val.id.toString() === id.toString()) > -1) {
            TODOS.splice(index, 1);
        }
        res.status(301).json({ message: `todo ${id} removed` });
    }
    return;
};
exports.deleteTodo = deleteTodo;
