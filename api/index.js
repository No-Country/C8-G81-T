const express = require('express')
const app = express()
const port = process.env.PORT || 3001

const routes = require('./src/routes/')

routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})