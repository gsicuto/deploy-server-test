import app from './app.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5005

app.listen(PORT, () => {
  console.log(`Listen on Port ${PORT}`)
})
