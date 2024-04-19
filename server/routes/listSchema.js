import express from "express"
import { listSchemaCreate } from "../controller/listSchemaController.js";

const router = express.Router();

router.post("/create", listSchemaCreate);

export default router