import { Router } from "express";
import { GetQuestion, BulkDelete } from "../../controller/getqueations.controller.js";
import { authmiddleware } from "../../middleware.js";

const router = Router()

// @GET /api/test-groq
router.post('/getquestions', authmiddleware ,GetQuestion)
router.delete('/bulkDelete-questions' ,BulkDelete)

export default router