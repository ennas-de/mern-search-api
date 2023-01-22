import mongoose from "mongoose";

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    responsible: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    completed: Boolean,
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
