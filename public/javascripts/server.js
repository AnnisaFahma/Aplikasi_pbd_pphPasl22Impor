const express = require('express')
const app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/',  (req, res) => res.send('hello world'))
  
app.get('/hey', function (req, res) {
  res.render('index', { title: 'Template', message: 'Hello there!' })

})
app.get('/yuhu', function (req, res) {
  res.render('index', { title: 'Form', message: 'sudah jadi' })
})

app.get('/nih', function (req, res) {
  res.render('form')
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))