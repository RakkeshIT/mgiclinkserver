import { Request, Response } from "express";
import groq from "../config/groq";

/*
MODEL

1] llama-3.3-70b-versatile

*/
export const Queation = async (req: Request, res: Response) => {
    try {
        const { role,
            experience,
            difficulty,
            numberOfQuestions, } = req.body.data
        console.log("Body from API: ", role,
            experience,
            difficulty,
            numberOfQuestions,);

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

        return res.status(200).json({ success: true, questions: parsedData.questions})
    } catch (error) {
        return res.status(500).json({ message: "Internel servel error", error: error })
    }
}