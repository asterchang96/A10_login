const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.get('/', (req, res) =>{
  return res.render('login')
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})