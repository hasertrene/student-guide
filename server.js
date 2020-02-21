const express = require('express')
const render = require('./render')
const app = express()

app.use(express.static("public"));

const summary = {
  monday: "started the week",
  tuesday: "picking up pace",
  wednesday: "understanding callbacks",
  thursday: "creating apps",
  friday: "summarize"
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
  console.log('All good')
  const day = req.params.day
  res.send(render(day))
})