import express from "express"
import { getAllListSchema, listSchemaCreate, listSchemaDelete } from "../controller/listSchemaController.js";
import { verify, verifyAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", verify, getAllListSchema);

router.post("/create", verifyAdmin, listSchemaCreate);

router.delete("/:title", verifyAdmin, listSchemaDelete);

export default router