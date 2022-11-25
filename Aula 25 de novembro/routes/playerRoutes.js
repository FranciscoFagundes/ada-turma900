const { Router } = require('express');
const Player = require('../models/Player');
const playerController = require('../controllers/playerController');

const router = Router();

router.get('/', playerController.playersHomePage);

router.get('/listPlayers', playerController.listPlayers);

router.get('/playerDetails/:name', playerController.playerDetails);

router.post('/addPlayer', playerController.addPlayer);

router.put('/updatePlayer', playerController.updatePlayer);

router.delete('/deletePlayer', playerController.deletePlayer)

module.exports = router;