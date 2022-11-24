const { Router } = require('express');
const Team = require('../models/Team');

const router = Router();

const teams = [
    {
        "id": "01",
        "name": "Brasil",
        "coach": "Tite",
        "championships": "5",
        "mascot": "canário",
        "worldcups": "22",
        "flag": "https://imagepng.org/bandeira-do-brasil/bandeira-do-brasil/"
    },
    {
        "id": "02",
        "name": "Japão",
        "coach": "Hajime Moryasu",
        "championships": "0",
        "mascot": "tanuki",
        "worldcups": "7",
        "flag": "https://upload.wikimedia.org/wikipedia/pt/3/32/JapanFA.png"
    },
    {
        "id": "03",
        "name": "Espanha",
        "coach": "Luis Enrique",
        "championships": "1",
        "mascot": "narajinto",
        "worldcups": "16",
        "flag": "https://upload.wikimedia.org/wikipedia/pt/3/31/Spain_National_Football_Team_badge.png"
    },
];
router.get('/', (req,res) => {
    res.send("Página raiz dos times");
});

router.get('/listTeams', (req,res) => {
    res.send(teams);
});

router.get('/teamDetails/:name', (req,res) => {
    const { name } = req.params;
    const teamName = teams.find((team) => team.name.toUpperCase() == name.toUpperCase());
    teamName ? res.send(teamName) : res.status(404).send("Time não encontrado");
});


router.post('/addTeam', (req,res) => {

    // let newId = req.body.id;
    // let newName = req.body.name;
    // let newCoach = req.body.coach;
    // let newChampionships = req.body.championships;
    // let newMascot = req.body.mascot;
    // let newWorldcups = req.body.worldcups;
    // let newFlag = req.body.flag;

    // let newTeam = new Team(newId, newName, newCoach, newChampionships, newMascot, newWorldcups, newFlag);

    const {id, name, coach, championships, mascot, worldcups, flag } = req.body;
    let newTeam = new Team(id, name, coach, championships, mascot, worldcups, flag);

    teams.push(newTeam);

    res.send("Time Adicionado");
});

router.put('/updateTeam', (req,res) => {
    res.send("Time Atualizado");
});

router.delete('/deleteTeam', (req,res) => {
    res.send("Time Apagado");
});


module.exports = router;