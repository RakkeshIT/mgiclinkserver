import GroqImport from "groq-sdk";

const Groq = GroqImport as any

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY!
})

export default groq