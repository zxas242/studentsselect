var mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'selectcourse',
    port:'3306'
})
module.exports = connection