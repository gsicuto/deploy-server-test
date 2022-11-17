import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './db/index.js'

// conexão com o DB
connectDB()

const app = express()

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())

import booksRoutes from './routes/books.routes.js'
app.use('/', booksRoutes)

export default app
