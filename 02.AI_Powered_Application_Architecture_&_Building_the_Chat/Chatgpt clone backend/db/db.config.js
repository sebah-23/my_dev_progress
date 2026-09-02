import mysql from "mysql2/promise"
const db= mysql.createPool({
    host: 'localhost',
    user:'gpt_admin',
    password: '12345',
    database: 'gpt_clone',
});


export default db;