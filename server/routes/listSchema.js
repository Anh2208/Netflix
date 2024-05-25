import express from "express"
import { getAllListSchema, createListSchema, deleteListSchema } from "../controller/listSchemaController.js";
import { verify, verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verify, getAllListSchema);

router.post("/create", verifyAdmin, createListSchema);

router.delete("/:id", verifyAdmin, deleteListSchema);

export default router