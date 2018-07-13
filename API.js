const express = require('express');
const app = express();
const request = require("request");
var mysql = require('mysql');
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
app.get('/insertAllData', function(req, res) {
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

app.get('/getAll', function(req, res) {
    connection.query('Select * From tasks', function(err,result) {
        if(err) {
            res.send(err);
        }
        else {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
            res.json(result);
        }

    });
    //connection.end()
});

//Searching into Database

app.get('/search', function(req, res) {
    connection.query('Select * From tasks', function(err,result) {
        if(err) {
            res.send(err);
        }
        else {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
            res.json(result);
        }

    });
    //connection.end()
});

//rest api to get a single Task data
app.get('/task/:id', function (req, res) {
    connection.query('select * from tasks where Id=?', [req.params.id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});



//rest api to update record into mysql database
app.put('/task', function (req, res) {
    connection.query('UPDATE `tasks` SET `status`=? where `Id`=?', [req.body.status, req.body.Id], function (error, results, fields) {
        if (error) throw error;
        res.end(JSON.stringify(results));
    });
});
app.listen(9999, () => console.log('Wimo listening on port 9999 !'))
