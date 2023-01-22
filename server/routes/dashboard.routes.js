import express from "express";
import {
  createTodo,
  deleteTodo,
  getAll,
  getOne,
  updateTodo,
} from "../controller/dashboard.controller.js";
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
