import express from "express"
import { movieCreate } from "../controller/movieController.js";

const router = express.Router();

router.post("/", movieCreate)

export default router