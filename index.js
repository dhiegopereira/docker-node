const express = require('express')

const PORT = 3001
const HOST = '0.0.0.0'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Word ok')
})

app.listen(PORT, HOST)