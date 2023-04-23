import express from 'express'
import { json as bodyParserJson } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import 'dotenv/config'

const { PORT = 3001 } = process.env
const app = express()

app.use(morgan('combined'))
app.use(bodyParserJson())
app.use(cors())

const server = app.listen(PORT, () => {
  console.warn('Server is running at', PORT)
})

app.get('/health', (req, res) => {
  res.send(`Server is running at ${PORT}`)
})

export default server
