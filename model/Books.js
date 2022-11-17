import { Schema, model } from 'mongoose'

const bookSchema = new Schema(
  {
    title: String,
    author: String,
  },
  { timestamps: true }
)

export default model('Book', bookSchema)
