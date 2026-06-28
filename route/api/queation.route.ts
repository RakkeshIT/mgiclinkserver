import { Router } from "express";
import { Queation } from "../../controller/question.controller";
import { authmiddleware } from "../../middleware";

const router = Router()

// @GET /api/test-groq
router.post('/q-groq', authmiddleware ,Queation)

export default router