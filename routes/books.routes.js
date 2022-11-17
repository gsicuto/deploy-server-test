import { Router } from 'express'
import Books from '../model/Books.js'

const router = Router()

router.post('/books', async (req, res) => {
  const { title, author } = req.body

  try {
    const newBook = await Books.create({ title, author })
    res.status(201).json(newBook)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get('/books', async (req, res) => {
  try {
    const books = await Books.find()
    res.status(200).json(books)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
