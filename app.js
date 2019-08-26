let express = require('express');
let app = express();
let bodyParser = require('body-parser')

let showView = __dirname + "/views/"

let db = []

app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

app.engine('html', require('ejs').renderFile);
app.set("view engine", "html");

app.listen(8000);

app.get('/', (req, res) => {
    res.sendFile(showView + "index.html")
})

app.get('/addCustomer', (req, res) => {
    res.sendFile(showView + "addNewCustomer.html")
})

app.post('/addNewCustomer', (req, res) => {
    console.log(req.body)
    db.push(req.body)
    res.sendFile(showView + "index.html")
})

app.get('/showCustomer', (req, res) => {
    res.render("showCustomer.html", {
        customer: db
    })
})