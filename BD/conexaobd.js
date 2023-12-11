import mysql from 'mysql'

let conexaodb = mysql.createConnection({
host: 'localhost',
port: '3306',
user: 'root',
password: '123456',
database:'projetoweb3'
})

conexaodb.connect()

export default conexaodb