const mysql = require('mysql')

// MySQL
const config = {
    connectionLimit: 50,
    connectTimeout: 9000,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hugoboss_db', 
}

var connection  = mysql.createConnection(config)

connection.connect(function(err){
  if (err){
    console.log('error connecting:' + err.stack)
  }
  else{
  console.log('connected successfully to DB.')
  }

});

module.exports ={
  connection  : mysql.createConnection(config) 
} 