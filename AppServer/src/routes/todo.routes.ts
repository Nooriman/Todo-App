import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllList,
  getSingleTodo,
  markComplete,
  updateTodo,
} from "../controller/todo.controller";

const router = express.Router();

router.get("/get-all-list", getAllList);
router.get("/get-single-todo", getSingleTodo);
router.post("/create-todo", createTodo);
router.post("/update-todo", updateTodo);
router.post("/delete-todo", deleteTodo);
router.post("/markCompleted", markComplete);

export default router;
