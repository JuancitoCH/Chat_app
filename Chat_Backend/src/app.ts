import express from 'express'
import error_handler from './libs/express/error_handler'
import notFound_handler from './libs/express/notFound_handler'
const app = express()

// Routes
import init from './routes/init.routes'


app.use(init)

// Error
app.use(error_handler)
// 404
app.use(notFound_handler)

export default app