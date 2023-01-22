import express from "express";
import mongoose from "mongoose";
import Todo from "../model/todo.model.js";

export const getAll = async (req, res) => {
  try {
    let todos = [];

    try {
      todos = await Todo.find();
      if (todos.length < 1)
        return res.status(200).json({
          success: true,
          message: "No record yet!",
        });
      else
        return res.status(200).json({
          success: true,
          message: "Todo successfully fetched",
          data: todos,
        });
    } catch (error) {
      if (error)
        return res.status(400).json({
          success: true,
          //   message: "Error ocurred!",
          message: error.message,
        });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      //   message: "Error ocurred!",
      message: error.message,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    let id = req.params.id;

    let todo = [];
    try {
      todo = await Todo.findById({ _id: id });

      if (!todo)
        return res.status(404).json({
          success: false,
          message: "No record found!",
        });

      res.status(200).json({
        success: true,
        //   message: "Error ocurred!",
        message: todo,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        //   message: "Error ocurred!",
        message: error.message,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      //   message: "Error ocurred!",
      message: error.message,
    });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { description, responsible, priority } = req.body;

    let newTodo = new Todo({
      description,
      responsible,
      priority,
    });

    try {
      let savedTodo = await newTodo.save();

      res.status(200).json({
        success: true,
        message: "New record created!",
        data: savedTodo,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        //   message: "Error ocurred!",
        message: err.message,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      //   message: "Error ocurred!",
      message: error.message,
    });
  }
};

export const updateTodo = async (req, res) => {
  try {
    let id = req.params.id;
    let newDetails = req.body;

    let todo = await Todo.findOne({ _id: id });

    if (!todo)
      return res.status(404).json({
        success: false,
        message: "Record Not found!",
      });

    try {
      let updatedTodo = await Todo.findByIdAndUpdate(id, newDetails);

      res.status(200).json({
        success: true,
        message: "Record updated!",
        data: updatedTodo,
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        //   message: "Error ocurred!",
        message: error.message,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      //   message: "Error ocurred!",
      message: error.message,
    });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    let id = req.params.id;

    let todo = await Todo.findOne({ _id: id });

    if (!todo)
      return res.status(404).json({
        success: false,
        message: "Record not found!",
      });

    try {
      await Todo.findByIdAndDelete({ _id: id });

      return res.status(200).json({
        success: true,
        message: "Record deleted!",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        //   message: "Error ocurred!",
        message: error.message,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      //   message: "Error ocurred!",
      message: error.message,
    });
  }
};
