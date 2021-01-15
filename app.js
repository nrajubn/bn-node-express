const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// displays message

app.get('/', (req, res) => {
    res.send("Hello World from Raju's app!")

  })

  // requests the about page
app.get('/about', (req, res) => {
    res.send("This is the about page")
  })

  // requests the contact page
app.get('/contact', (req, res) => {
    res.send("This is the contact page")
  })

  // requests the help page
app.get('/help', (req, res) => {
    res.send("This is the help page")
  })

  // requests the help page
app.get('/help/:id', (req, res) => {
    res.send(`help response for ${req.params.id}`)
  })

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })