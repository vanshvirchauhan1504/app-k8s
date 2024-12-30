const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test_db'
});

const userId = req.query.userId; // Assume this comes from user input
const query = `SELECT * FROM users WHERE id = ${userId}`; // Vulnerable to SQL Injection

connection.query(query, (err, results) => {
  if (err) throw err;
  console.log(results);
});

