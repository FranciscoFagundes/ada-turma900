const { Router } = require('express');
const Player = require('../models/Player');

const router = Router();

const players = [
    {
        "id": "01",
        "name": "Neymar Jr",
        "birthDate": "05/02/1992",
        "team": "PSG",
        "position": "atacante",
        "nationalTime": "Brasil"
    },
    {
        "id": "02",
        "name": "Richarlison",
        "birthDate": "10/05/1997",
        "team": "Tottenham",
        "position": "atacante",
        "nationalTime": "Brasil"
    },
    {
        "id": "03",
        "name": "Thiago Silva",
        "birthDate": "22/09/1984",
        "team": "Chelsea",
        "position": "zagueiro",
        "nationalTime": "Brasil"
    },
];

router.get('/', (req, res) => {
    res.send('Página raiz dos jogadores');
});

router.get('/listPlayers', (req,res) => {
    res.send(players);
});

router.get('/playerDetails/:name', (req,res) => {
    const { name } = req.params;
    const playerName = players.find((player) => player.name.toUpperCase() == name.toUpperCase());
    playerName ? res.send(playerName) : res.status(404).send("Jogador não encontrado");
});

router.post('/addPlayer', (req, res) => {

});

router.put('/updatePlayer', (req,res) => {
    res.send('Jogador Atualizado');
});

router.delete('/deletePlayer', (req, res) => {
    res.send('Jogador Apagado');
})

module.exports = router;