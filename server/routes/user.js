import express from "express"
import { getUser, updateUser } from "../controller/userController.js";
import { verify } from "../middleware/authMiddleware.js"

const router = express.Router();

router.get("/:email", verify, getUser);

router.put("/:id", verify, updateUser);

export default router