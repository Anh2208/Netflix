import express from "express";
import { createMovie, deleteMovie, getAllMovie, getMovieById, getMovieByTitle, getMovieRandom, getVideo, updateMovie, upload } from "../controller/movieController.js";
import { verifyAdmin, verify } from "../middleware/authMiddleware.js";
import multer from 'multer'
const router = express.Router();
const uploads = multer({ dest: 'uploads/' });


router.post("/", verifyAdmin, createMovie)

router.put("/:id", verifyAdmin, updateMovie);

router.delete("/:id", verifyAdmin, deleteMovie);

router.get("/findAll", verify, getAllMovie);

router.get("/find/:id", verify, getMovieById);

router.get("/find", verify, getMovieByTitle);

router.get("/random", verify, getMovieRandom);

router.post('/upload', uploads.single('file'), upload);
router.get('/:filename', getVideo);

export default router