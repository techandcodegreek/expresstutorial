const express = require('express');
const path = require('path');
const shout = require('./middleware/shout')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded())

app.use(shout);
app.use('/api/students', require('./routes/api/students'))

app.listen(PORT, ()=> console.log(`Server is listening in port ${PORT}`))

