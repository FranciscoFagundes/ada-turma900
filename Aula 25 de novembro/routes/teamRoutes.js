const { Router } = require('express');
const teamController = require('../controllers/teamController');

const router = Router();


router.get('/', teamController.teamHomePage);

router.get('/listTeams', teamController.listTeams);

router.get('/teamDetails/:name', teamController.teamDetails);

router.post('/addTeam', teamController.addTeam);

router.put('/updateTeam', teamController.updateTeam);

router.delete('/deleteTeam',teamController.deleteTeam);


module.exports = router;