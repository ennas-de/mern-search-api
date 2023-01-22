import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// import routes
import Router from "./routes/dashboard.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.get("/", (req, res) => {
  res.status(200).json("Hello from Abdulhakeem!");
});

app.get("/api", (req, res) => {
  res
    .status(200)
    .json(
      "This is the MERN stack Todo server api. I hope you have fun checking out the project!"
    );
});

app.use("/api/dashboard", Router);

app.all("/*", (req, res) => res.status(404).json("Not found!"));

mongoose
  .connect(process.env.dbUri)
  .then(() => console.log(`connected to db...`))
  .catch((error) => console.log(error));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server started...`));
