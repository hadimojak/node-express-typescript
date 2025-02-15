import { Request, Response, NextFunction, RequestHandler } from "express";
import { CreateTodoBody, Todo, updateTodoParam } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const { text, id }: CreateTodoBody = req.body;
  const newTodo = new Todo(id ? id : Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: "craete new todo", createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  if (!TODOS.length) throw new Error("not todo found");
  else {
    res.status(201).json({ todos: TODOS });
  }
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params;

    if (!TODOS.find((val) => val.id === id)) throw new Error("todo no found");
};

export const deleteTodo: RequestHandler = (req, res, next) => {};
