import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";

import { connect } from "./config/database.js";
import authRouter from "./routes/auth.js"
import userRouter from "./routes/user.js"
import listSchemaRouter from "./routes/listSchema.js"
import movieRouter from "./routes/movie.js"
import myListRouter from "./routes/myList.js"
import CustomerError from "./utils/CustomerError.js";
import globalErrorHandler from "./controller/errorController.js"

const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));
app.use(bodyParser.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/listSchema", listSchemaRouter);
app.use("/api/movie", movieRouter);
app.use("/api/mylist", myListRouter);
app.all('*', (req, res, next) => {
    const err = new CustomerError(`Can't find ${req.originalUrl} on the server!`, 404);
    next(err);
});
// app.use((error, req, res, next) => {
//     error.statusCode = error.statusCode || 500;
//     error.status = error.statusCode || 'error';
//     res.status(error.statusCode).json({
//         status: error.statusCode,
//         message: error.message
//     })
// })
app.use(globalErrorHandler);

app.listen(port, () => {
    connect();
    console.log("Server listen at port ", port);
});