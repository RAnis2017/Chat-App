const path = require('path');
const express = require('express')
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();

console.log(__dirname + '/../public');
console.log(publicPath);
app.use(express.static(publicPath));
app.get('/', function(req, res) {
    res.render("index.html");
});

app.listen(port, function() {
    console.log(`Server is up on ${port}`);
});