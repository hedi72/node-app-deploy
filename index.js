const express = require('express')
const app = express()
const port = 3008

app.get('/', (req, res) => {
  res.send("a7laa hadhoud you are software engeneer !")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})