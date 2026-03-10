const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE |
sqlite3.OPEN_CREATE, (erro) => {
if (erro) {
return console.error('Erro ao abrir o banco de dados:', erro.message);
}
console.log('Conectado ao banco de dados SQLite.');
});