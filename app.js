import express from 'express'
import bookRoutes from './routes/book'

const app = express()

app.use('/books', bookRoutes)

export default app

