const express = require('express')
const app = express()
const appLimiters = require('./rateLimiter/rateLimiter')
const PORT = 3000 || process.env.PORT

// app.use(appLimiters.appLimiter)

app.get('/', appLimiters.routeLimiter, (req, res) => {
  let data = [
    {
      name: 'Tarun',
    },
    {
      name: 'Varun',
    },
    {
      name: 'Lokesh',
    },
  ]

  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)
})
