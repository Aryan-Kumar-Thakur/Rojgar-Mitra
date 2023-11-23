const path = require("path")
const express = require ("express")
const hbs = require("hbs")
const PORT = process.env.PORT || 8000;

const app = express();


const static_path = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_path = path.join(__dirname, "../templates/partials")

app.set("view engine", "hbs")
app.set("views", template_path)
hbs.registerPartials(partials_path)

app.use(express.static(static_path))

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/jobs', (req, res) => {
    res.render('jobs')
})
app.get('/searchjobs', (req, res) => {
    res.render('searchjobs')
})
app.get('*', (req, res) => {
    res.render('404err')
})

// Sending the Protected (env) Api key and Id to the backend 


app.listen(PORT, () => {
    console.log(`listening to the port at ${PORT}`);
})