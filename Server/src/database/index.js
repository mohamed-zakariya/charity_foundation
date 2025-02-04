var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    database: 'charity-foundation',
    port: '3308'
});

connection.connect(function(err){
    if(err){
        console.log("error code",err.code);
        console.log("error fatal", err.fatal);
    }
});



module.exports = connection;