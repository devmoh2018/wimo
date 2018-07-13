var express = require('express');
const request = require("request");
var mysql = require('mysql')

var router = express.Router();


/* GET home page. */
//router.get('/', function(req, res, next) {
//    Task.find(function (err, products) {
//        if (err) return next(err);
//        res.json(products);
//    });
//});

var values = [];
var data = [];
var arr=[];
request({uri: "https://api.myjson.com/bins/b9ix6"},
    function(error, response, body) {
        arr = JSON.parse(body);
        for(var x in arr){
            values.push(arr[x]);
        }
        for(var i=0; i< values.length; i++)
            for(var j=0; j<values[i].length ; j++)
                data.push([values[i][j].driverName,values[i][j].courier,values[i][j].deliveryDate,values[i][j].fromLocation,values[i][j].toLocation,values[i][j].status,values[i][j].description]);

    });

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'test',
    database : 'wimo'
});
connection.connect()

// Fetech Data From Uri Sources
router.get('/insert', function(req, res) {
    connection.query('INSERT INTO  tasks (driverName, courier, deliveryDate, fromLocation, toLocation, status, description) VALUES ?', [data], function(err,result) {
        if(err) {
            res.send('Error');
        }
        else {
            res.send('Success');
        }

    });
    connection.end()
});

/// Reterive Data From DataBase

router.get('/', function(req, res) {
    connection.query('Select * From tasks', function(err,result) {
        if(err) {
            res.send(err);
        }
        else {
            res.json(result);
        }

    });
    connection.end()
});

module.exports = router;





