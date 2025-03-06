import express from 'express'
import corsMiddleware from './middlewares/cors.js'
const app = express()

app.disable('x-powered-by')
app.use(express.json())
app.use(corsMiddleware())

app.get('/', (req, res) => {
  res.send('API is Running')
})

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => {
  console.log(` server listening on  http://localhost:${PORT}/`)
})

export default app