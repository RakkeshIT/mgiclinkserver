import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser = require('cookie-parser')
import { connectDb } from './utils/db'

// API's
import auth from './route/api/auth'
import Queation from './route/api/queation.route'

dotenv.config()
import './config/env'

const app = express()
app.set("trust proxy", 1);

app.use(cors({origin: ['http://localhost:3000','https://magiclinkfrontend.vercel.app'], credentials: true}))
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000;

connectDb()
app.use('/', auth)
app.use('/api', Queation)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)  
})