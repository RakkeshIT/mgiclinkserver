import { Router } from "express";
import { Queation } from "../../controller/question.controller";

const router = Router()

// @GET /api/test-groq
router.post('/q-groq', Queation)

export default router