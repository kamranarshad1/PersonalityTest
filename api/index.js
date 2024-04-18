require('dotenv/config')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', routes)

const PORT = process.env.PORT || 8000

app.listen(process.env.PORT || 8000, () => {
  console.log(`Api is running on port ${PORT}`)
});
