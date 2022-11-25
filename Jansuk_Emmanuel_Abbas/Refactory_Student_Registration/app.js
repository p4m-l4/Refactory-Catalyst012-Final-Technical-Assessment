const path = require('path')
const express = require('express')
const mongose = require('mongoose')

const configurations = require('./config/config')

const app = express()

//routes
const registrationRoutes = require('./routes/register')

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))


mongose.connect(`${configurations.DATABASE}`, {useNewUrlParser: true})
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err))

 
app.use('/', registrationRoutes)


app.get('*', (req,res) => {
    res.send('Page not found')
})

const port = process.env.PORT || 3000;

app.listen(`${port}`, () => {
    console.log('App is listening')
})