const { Router } = require('express');

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
    }
];
router.get('/', (req,res) => {
    res.send("Página raiz dos times");
});

router.get('/listTeams', (req,res) => {
    res.send('Lista de times');
});

router.get('/teamDetails/:name', (req,res) => {
    const { name } = req.params;
    res.send(`Detalhes do time ${name}`);
});

router.post('/addTeam', (req,res) => {
    res.send("Time Adicionado");
});

module.exports = router;