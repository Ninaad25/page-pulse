import express from "express";
import { auditWebsite } from "../controllers/auditController.js";

const router = express.Router();

// POST /api/audit
router.post("/audit", auditWebsite);

export default router;
