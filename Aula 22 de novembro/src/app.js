const express = require('express');
const teamRoutes = require('../routes/teamRoutes');
const playerRoutes = require('../routes/playerRoutes');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/teams', teamRoutes);
app.use('/players', playerRoutes);

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});
