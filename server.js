const express = require('express')
const app = express()

const summary = {
  monday: "started the week",
  tuesday: "picking up the pace",
  wednesday: "understanding callbacks",
  thursday: "creating apps",
  friday: "summarize"
}

function render(thisDay){
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Today is ${thisDay}</title>
  </head>
  <body>
    <h1>Today is ${thisDay}, woop woop!</h1>
  </body>
  </html>
  `
}

const port = process.env.PORT || 3000
const running = 'Server running'
app.listen(port, ()=>console.log(running))

app.get('/summary/:day', (req, res)=>{
  const day = req.params.day
  const daySummary = summary[day]
  res.send(JSON.stringify(daySummary))
})

app.get('/:day', (req, res)=>{
  const day = req.params.day
  res.send(render(day))
})