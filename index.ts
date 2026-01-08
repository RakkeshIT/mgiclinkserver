import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDb } from './utils/db'
import auth from './route/api/auth'
import cookieParser = require('cookie-parser')
dotenv.config()

const app = express()
app.use(cors({origin: ['http://localhost:3000','https://magiclinkfrontend.vercel.app'], credentials: true}))
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000;

connectDb()
app.use('/', auth)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})