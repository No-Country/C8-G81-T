const { json } = require('express')
const express = require('express')
const cors = require('cors')


const app = express()
app.use(json())
app.use(cors())



const port = process.env.PORT || 3001
const routes = require('./src/routes/')

routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})