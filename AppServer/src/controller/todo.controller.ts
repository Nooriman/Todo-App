import { Request, Response } from "express";
import TodoModel, { TodoSchema } from "../model/todo.model";

export const getAllList = async (req: Request, res: Response) => {
  try {
    const todos: TodoSchema[] = await TodoModel.find();
    console.log("res", todos);
    res.json(todos);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getSingleTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const todo = await TodoModel.findById(id);

    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description, list, dueDate, tag } = req.body;
    await TodoModel.create({
      title: title,
      description: description,
      list: list,
      dueDate: dueDate,
      tag: tag,
    });
    res.status(201).json({ message: "Todon successfully created" });
  } catch (error: any) {
    console.log("error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, list, dueDate, tag } = req.body;

    const updatedTodo = await TodoModel.findByIdAndUpdate(
      id,
      {
        title: title,
        description: description,
        list: list,
        dueDate: dueDate,
        tag: tag,
      },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo Not Found" });
    }

    res
      .status(200)
      .json({ message: "Item successfully updated", todo: updateTodo });
  } catch (error: any) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedTodo = await TodoModel.findByIdAndDelete(id);

    if (!deleteTodo) {
      return res.status(404).json({ message: "Todo Not Found" });
    }
    res.status(200).json({ message: "Item successfully deleted" });
  } catch (error: any) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const markComplete = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const updatedTodo = await TodoModel.findByIdAndUpdate(
      id,
      { completed: true },
      { new: true }
    );

    if (!updateTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res
      .status(200)
      .json({
        message: "Todo successfully marked as completed",
        todo: updatedTodo,
      });
  } catch (error: any) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
