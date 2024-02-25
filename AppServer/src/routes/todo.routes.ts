import express from "express";
import { addTodoItem, getAllList } from "../controller/todo.controller";

const router = express.Router();

router.get("/get-all-list", getAllList);
router.post("/post-todo", addTodoItem);

export default router;