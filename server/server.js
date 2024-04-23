import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { connect } from "./config/database.js";
import authRouter from "./routes/auth.js"
import userRouter from "./routes/user.js"
import listSchemaRouter from "./routes/listSchema.js"
import movieRouter from "./routes/movie.js"
import myListRouter from "./routes/myList.js"

const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

app.use(cookieParser())
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/listSchema", listSchemaRouter);
app.use("/api/movie", movieRouter);
app.use("/api/mylist", myListRouter);

app.listen(port, () => {
    connect();
    console.log("Server listen at port ", port);
});