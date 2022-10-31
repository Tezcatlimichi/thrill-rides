const PORT = process.env.PORT || 3001
const express = require('express')

const app = express()

//middleware goes here
app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit. Thrill rides' })
})

app.listen(PORT, () => {
  console.log(`Express server listening on port : ${PORT}`)
})
