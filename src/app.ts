// const express = require("express");
import express, { Request, Response, NextFunction } from "express";
import todoRouter from "./routes/todos";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/todos", todoRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);
