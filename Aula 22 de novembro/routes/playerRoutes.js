const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Página raiz dos jogadores');
});

router.get('/listPlayers', (req,res) => {
    res.send('Lista de jogadores');
});

module.exports = router;