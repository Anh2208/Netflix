import express from "express"
import { verify } from "../middleware/authMiddleware.js";
import { createMyList, deleteMyList } from "../controller/myListController.js";

const router = express.Router();

router.post("/", verify, createMyList);

router.delete("/", verify, deleteMyList);

export default router;