import express from "express";
import dotenv from "dotenv";
import listSchemaRouter from "./routes/listSchema.js"
import { connect } from "./config/database.js";

const app = express();
dotenv.config();
const port = process.env.PORT || 8000;

app.use(express.json());

app.use("/listSchema", listSchemaRouter)

app.listen(port, () => {
    connect();
    console.log("Server listen at port ", port);
});