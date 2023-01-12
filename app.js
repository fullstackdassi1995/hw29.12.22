// index.js
const express = require('express')
const router = express.Router()
const path = require('path')
const url = require('url')
const cors = require('cors')
const { response } = require('express')

const port = 8080;

const app = express()

// to use body parameters
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors());

app.use(express.static(path.join('.', '/static/'))) // /static/index.html
// page1.html


app.get('/datetime’', (req, resp) => {
    resp.writeHead(201);
    resp.end(`the date now is: ${new Date()}`)
})



app.get('/bigger', (req, resp) => {
    // http://localhost:8080/bigger? x = 3 & y = 4

    console.log(req.url);
    console.log(req.query);

    const x = Number(req.query.x)
    const y = Number(req.query.y)

    if (isNaN(x)) {
        resp.writeHead(400)
        resp.end(`${req.query.x} is not a number`)
        return
    }
    if (isNaN(y)) {
        resp.writeHead(400)
        resp.end(`${req.query.y} is not a number`)
        return
    }
    resp.writeHead(200)

    if (x > y){
        resp.end(`the bigger is ${x}  =  ${x} > ${y}`)
    }
    else{
        resp.end(`the bigger is ${y}  =  ${x} < ${y}`)
    }
    if (x == b){
        resp.end(`they are equal  ${x} = ${y}`)
    }
    //resp.end(`${JSON.stringify(req.query.x)}`)
})



app.get('/targil/:a/:b/:sum', (req, resp) => {
    // http://localhost:8080/targil add /3/4/18

    console.log(req.url);
    console.log(req.query);

    const a = Number(req.params.a)
    const b = Number(req.params.b)
    const sum = Number(req.params.sum)

    if (isNaN(a) || isNaN(a) || isNaN(sum)) {
        resp.writeHead(400)
        resp.end(`${req.params.a} or ${req.params.a} or ${req.params.sum} is not a number`)
        return;
    }
    if (sum == a + b){
        resp.sendFile(path.join(__dirname, 'static/correct.html'))
        return;
    }
    else {
        resp.sendFile(path.join(__dirname, 'static/wrong.html')) 
        return;
    }
})

app.get('/targil', (req, resp) => {
    // http://localhost:8080/targil 

    console.log(req.url);
    console.log(req.query);
    console.log(req.body);

    const a = Number(req.body.a)
    const b = Number(req.body.b)
    const sum = Number(req.body.sum)

    if (isNaN(a) || isNaN(a) || isNaN(sum)) {
        resp.writeHead(400)
        resp.end(`${req.body.a} or ${req.body.a} or ${req.body.sum} is not a number`)
        return;
    }

    if (sum == a + b){
        resp.sendFile(path.join(__dirname, 'static/correct.html'))
        return;
    }
    else {
        resp.sendFile(path.join(__dirname, 'static/wrong.html')) 
        return;
    }

})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})