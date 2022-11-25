const sqlite3 = require('sqlite3').verbose();
const filePath = './worldcup.db';


let db = "";

const createDbConnection = () => {
    db = new sqlite3.Database(filePath, (error) => {
        if(error) {
            return console.error(error.message);
        }
    });
    console.log("Conexão com o banco de dados estabelecida");
    return db;
}

const createTeamTable = () => {
    let sql = "CREATE TABLE IF NOT EXISTS teams ( id INTEGER PRIMARY KEY, name TEXT, coach TEXT, campionships TEXT, mascot TEXT, worldcups TEXT, flag TEXT)";
    db.run(sql);
    console.log("Tabela teams criada");
}

const addTeam = () => {
    let sql = "INSERT INTO teams values ('2', 'Brasil', 'Tite', '5', 'canario', '22', 'https://imagepng.org/bandeira-do-brasil/bandeira-do-brasil/')";
    db.run(sql);
    console.log("Time criado");
}

const listTeams = () => {
    let sql = "Select * from teams";
    db.all(sql,[], (err, rows) => {
        if(err) return console.error(err.message);
        rows.forEach(rows => {
            console.log(rows);
        });
    })
}




module.exports = { createDbConnection, createTeamTable, addTeam , listTeams }