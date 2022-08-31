import express from "express";
import index from "./routes/index.js";
import studentRoute from "./routes/studentRoute.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', index);
app.use('/student', studentRoute);


