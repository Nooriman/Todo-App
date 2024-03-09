import express, { Application } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import todoRoute from "./routes/todo.routes";
import authenticationRouter from './routes/authentication.routes';

dotenv.config();

const app: Application = express();
const MONGODB_URI = process.env.MONGODB_URI!;

app.use(cors());
app.use(express.json());
app.use("/api", todoRoute);
app.use("/api", authenticationRouter);

mongoose
  .connect(MONGODB_URI)
  .then(async (res) => {
    console.log("Connected to MongoDB");
    const adminDb = mongoose.connection.db.admin();
    const databaseList = await adminDb.listDatabases();
    // console.log("List of databases:", databaseList.databases);
    console.log("Connected to databases:", mongoose.connection.name);

    app.listen(process.env.PORT, () =>
      console.log(`Server is running on: ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    console.log(err);
  });
