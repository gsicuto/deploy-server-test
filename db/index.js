import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const DB_URI = process.env.MONGO_URI || 'mongodb://localhost/deploytest'

const connect = async () => {
  try {
    const x = await mongoose.connect(DB_URI)
    console.log(`Connected to DB ${x.connections[0].name}`)
  } catch (error) {
    console.error('Error trying to connect to DB', error)
  }
}

export default connect
