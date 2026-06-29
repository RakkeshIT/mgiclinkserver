import { Request, response, Response } from "express";
import { Questions } from "../models/queation.js";

// @ POST api/getqueations

interface IUserQuery {
    role: string;
    experience: string;
    difficulty: string;
    numberOfQuestions: number;
  }
  
interface IQuestion {
    id: number;
    question: string;
    _id: string;
  }
  
interface IQuestionDocument {
    userId: string;
    user_query: IUserQuery;
    questions: IQuestion[];
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  interface AuthRequest extends Request {
    user?: {
        userId: string;
        email: string;
    };
}

export const GetQuestion = async (req: AuthRequest, res: Response) => {
    try {
        const userId = req.user?.userId
        const questions = await Questions.find({userId: userId}).sort({createdAt: -1})    

        const totalQuestions =await Questions.aggregate([
            {
                $match: {
                    userId: userId
                }
            },
            {
                $project: {
                    questionCount: {
                        $size:"$questions"
                    }
                }
            },
            {
                $group:{
                    _id: null,
                    totalQuestions: {
                        $sum: "$questionCount"
                    }
                }
            }
        ])

        const totalRecords = await Questions.countDocuments()
        const latestUserQuery = questions[0]?.user_query;
        const totalQueationsCount = totalQuestions[0]?.totalQuestions || 0

        return res.status(200).json({ success: true, data: {questions, records: {
            totalRecords: totalRecords,
            latestUserQuery: latestUserQuery,
            totalQueationsCount: totalQueationsCount,
        }} })

        
    } catch (error) {
        return res.status(500).json({ message: "Internel servel error", error: error })
    }
}


export const BulkDelete = async (req: Request, res: Response) => {
    try {
        const data = await Questions.deleteMany()
        return res.status(200).json({status: true, message:"All Records Deleted", data})
    } catch (error) {
        return res.status(500).json({status: false, message:"Internal Server Error"})
    }
}