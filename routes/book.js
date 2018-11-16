import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    const books = [{
        id: 1,
        name: 'Default name book'
    }]
    res.json(books)
})

export default router