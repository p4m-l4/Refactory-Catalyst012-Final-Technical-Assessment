const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')

const app = express()

const configurations = require('./config/config')
const registrationRoutes = require('./routes/registerRoute')

// // MiddleWares
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// DB CINNECTION
mongoose.connect(`${configurations.DB}`, {useNewUrlParser: true})
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log('Not well connected'))

// Using the Imported Routes
app.use('/', registrationRoutes)

app.get('/', (req,res) => {
    res.render('registration')
})
// SERVE SETUP
app.listen(9000, () => {
    console.log('Listening to Port 9000')
})