import express from "express";
import { createMoive, deleteMovie, getMovieById, getMovieByTitle, getMovieRandom, updateMovie } from "../controller/movieController.js";
import { verifyAdmin, verify } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyAdmin, createMoive)

router.put("/:id", verifyAdmin, updateMovie);

router.delete("/:id", verifyAdmin, deleteMovie);

router.get("/find/:id", verify, getMovieById);

router.get("/find", verify, getMovieByTitle);

router.get("/random", verify, getMovieRandom);

export default router