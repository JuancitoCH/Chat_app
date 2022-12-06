import express from 'express'
const app = express()

// Routes
import init from './routes/init.routes'


app.use(init)


export default app