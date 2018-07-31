var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var dbConn = mongodb.MongoClient.connect('mongodb://localhost/pembelian');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, 'public')));

app.post('/post-feedback', function (req, res) {
    dbConn.then(function(db) {
        delete req.body._id; // for safety reasons
        db.pembelian('feedback').insertOne(req.body);
    });    
    res.send('Data received:\n' + JSON.stringify(req.body));
});

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );