const players = require('../db/players');
const Player = require('../models/Player');


const playersHomePage = (req,res) => {
    res.send('Página raiz dos jogadores');
}

const listPlayers = (req,res) => {
    res.send(players);
}

const playerDetails = (req,res) => {
    const { name } = req.params;
    const playerName = players.find((player) => player.name.toUpperCase() == name.toUpperCase());
    playerName ? res.send(playerName) : res.status(404).send("Jogador não encontrado");
}

const addPlayer = (req,res) => {
    const {id, name, birthDate, team, position, nationalTeam } = req.body;
    let newPlayer = new Player(id, name, birthDate, team, position, nationalTeam);

    players.push(newPlayer);

    res.send("Time Adicionado");
}

const updatePlayer = (req,res) => {
    res.send('Jogador Atualizado');
}

const deletePlayer = (req, res) => {
    res.send('Jogador Apagado');
}

module.exports = { playersHomePage, listPlayers, playerDetails, addPlayer, updatePlayer, deletePlayer }