import { Request, Response } from "express";
import TodoModel, { TodoSchema } from "../model/todo.model";

 export const getAllList = async (req: Request, res: Response) => {
  try {
    console.log('hello')
    const todos : TodoSchema[] = await TodoModel.find();
    console.log('res', todos);
    res.json(todos);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export const addTodoItem = async (req: Request, res: Response) => {

  try {
    const { title, description } = req.body;
  } catch (error: any) {}
}