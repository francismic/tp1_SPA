const path = require('path')
const express = require('express')
const app = express();
const fs = require('fs')
const request = require('request')
const { PORT } = require('./config.js')
const { API_KEY } = require('./config.js')

app.get('/', function(req, res){

    var url = 'https://www.thecocktaildb.com/api/json/v2/'+API_KEY+'/popular.php';

    request.get({
        url: url,
        json: true,
        headers: {'User-Agent': 'request'}
    }, (err, res, data) => {
        if (err) {
        console.log('Error:', err);
        } else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode);
        } else {
        // data is successfully parsed as a JSON object:
        var newData = JSON.stringify(data)
        fs.writeFile("./frontend/static/views/drink.json", newData, err => {
            if(err) throw err;
            console.log("success");
            })
        }
    });
    res.end()
})

// Acces folder static
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")))

// Acces page index.html
app.get("/*", function(req, res){
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"))
})

app.listen(PORT || 4001, () =>{console.log("Server running", PORT)})