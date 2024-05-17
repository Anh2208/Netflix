import express from "express"
import { deleteUser, getAllUser, getUser, updateUser } from "../controller/userController.js";
import { verify, verifyAdmin } from "../middleware/authMiddleware.js"

const router = express.Router();

router.get("/:email", verify, getUser);

router.get("/", verifyAdmin, getAllUser);

router.put("/:email", verify, updateUser);

router.delete("/:id", verifyAdmin, deleteUser);

export default router