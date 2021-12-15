const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')



const app = express()
const port = process.env.PORT || 5000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}))

app.use(bodyParser.urlencoded({ extended : false }))

// Routes
const homeRouter = require('./src/routes/home')
const adminRouter = require('./src/routes/admin')



//user routes
app.use('/', homeRouter)
//admin routes
app.use('/admin', adminRouter)


app.use((req,res)=>{
    res.render('404.ejs', {root: __dirname})
})


// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))