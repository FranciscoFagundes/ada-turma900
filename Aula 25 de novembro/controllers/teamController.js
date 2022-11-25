
const teams = require('../db/teams');
const Team = require('../models/Team');

const teamHomePage = (req,res) => {
    res.send("Página raiz dos times");
}

const listTeams = (req,res) => {
    res.send(teams);
}

const teamDetails = (req, res) => {
    const { name } = req.params;
    const teamName = teams.find((team) => team.name.toUpperCase() == name.toUpperCase());
    teamName ? res.send(teamName) : res.status(404).send("Time não encontrado");
}

const addTeam = (req, res) => {
    const {id, name, coach, championships, mascot, worldcups, flag } = req.body;
    let newTeam = new Team(id, name, coach, championships, mascot, worldcups, flag);

    teams.push(newTeam);

    res.send("Time Adicionado");
}

const updateTeam = (req, res) => {
    res.send("Time Atualizado");
}

const deleteTeam = (req,res) => {
    res.send("Time Apagado");
}
module.exports = { teamHomePage, listTeams, teamDetails, addTeam, updateTeam, deleteTeam }