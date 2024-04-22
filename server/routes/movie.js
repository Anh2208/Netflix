import express from "express";
import { createMoive, deleteMovie, updateMovie } from "../controller/movieController.js";

const router = express.Router();

router.post("/", createMoive)

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

export default router