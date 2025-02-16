import { Request, Response, NextFunction, RequestHandler } from "express";
import { CreateTodoBody, Todo, updateTodoParam } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const { text, id }: CreateTodoBody = req.body;

  const newTodo = new Todo(text, id ? id.toString() : Math.random().toString());

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
  const { text } = req.body;

  if (!TODOS.find((val) => (val.id as string).toString() === id.toString())) throw new Error("todo no found");
  else {
    const index = TODOS.findIndex((val) => (val.id as string).toString() === id.toString());
    if (TODOS.findIndex((val) => (val.id as string).toString() === id.toString()) > -1) {
      TODOS[index] = { text: text ? text : TODOS[index].text, id };
    }

    res.status(301).json({ message: `todo ${id} updated` });
  }

  return;
};

export const deleteTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params;

  if (!TODOS.find((val) => (val.id as string).toString() === id.toString())) throw new Error("todo no found");
  else {
    const index = TODOS.findIndex((val) => (val.id as string).toString() === id.toString());

    if (TODOS.findIndex((val) => (val.id as string).toString() === id.toString()) > -1) {
     TODOS.splice(index, 1)
    }

    res.status(301).json({ message: `todo ${id} removed` });
  }

  return;
};
