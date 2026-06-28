import { Router } from "express";
import { Queation } from "../../controller/question.controller.js";
import { authmiddleware } from "../../middleware.js";

const router = Router()

// @GET /api/test-groq
router.post('/q-groq', authmiddleware ,Queation)

export default router