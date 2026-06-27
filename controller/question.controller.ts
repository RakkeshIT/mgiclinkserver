import { Request, Response } from "express";
import groq from "../config/groq";
import { Questions } from "../models/queation";

/*
MODEL

1] llama-3.3-70b-versatile

*/
interface AuthRequest extends Request {
    user?: {
        userId: string;
        email: string;
    };
}

export const Queation = async (req: AuthRequest, res: Response) => {
    try {
        const { role,
            experience,
            difficulty,
            numberOfQuestions, } = req.body.data
        console.log("Body from API: ", role,
            experience,
            difficulty,
            numberOfQuestions,);

        const userId = req.user?.userId;

        console.log("User Id: ", userId);


        const completion = await groq.chat.completions.create({
            model: "llama-3.3-70b-versatile",
            messages: [
                {
                    role: "user",
                    content:
                        `
                        Generate ${numberOfQuestions} interviw queations.
                        Role: ${role}
                        Difficulty: ${difficulty}
                        Return Only JSON.

                        {
                            "questions":[
                                "id":1,
                                "question": "queation here"
                            ] 
                        }

                        `,
                },
            ],

            response_format: {
                type: "json_object"
            },
        })

        const content =
            completion.choices?.[0]?.message?.content;

        if (!content) {
            return res.status(500).json({
                success: false,
                message: "No response received from AI",
            });
        }
        const parsedData = JSON.parse(
            content || "{}"
        );

        // Model

        const queations = new Questions({
            userId,
            user_query:{
                role,
                experience,
                difficulty,
                numberOfQuestions,
            },
            questions:
                parsedData.questions
        })

        queations.save()
        
        return res.status(200).json({ success: true, storedId: queations._id, data: parsedData })
    } catch (error) {
        return res.status(500).json({ message: "Internel servel error", error: error })
    }
}