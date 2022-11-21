const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const users = [
    {
        "id": 01,
        "name": "Francisco",
        "cpf": "123456789-00",
        "gender": "masculino",
        "birthDate": "24/08/1978"
    },
    {
        "id": 02,
        "name": "Caroline Miranda",
        "cpf": "123456789-00",
        "gender": "feminino",
        "birthDate": "14/02/96"
    },
    {
        "id": 03,
        "name": "Lucas Anjos",
        "cpf": "123456789-00",
        "gender": "transformer",
        "birthDate": "04/02/2000"
    },
    {
        "id": 04,
        "name": "Paulo Rondon",
        "cpf": "123456789-00",
        "gender": "masculino",
        "birthDate": "18/02/2003"
    }
]


app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/users', (req, res) => {
    res.status(200).send(users);
});

app.get('/user/:name', (req,res) => {
    const reqName = req.params.name;
    const userName = users.find((user) => user.name == reqName);
    userName ? res.send(userName) : res.status(404).send("Usuário não encontrado");
});

class User {
    constructor(id, name, cpf, gender, birthDate){
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.gender = gender;
        this.birthDate = birthDate;
    }
}

app.post('/addUser', (req, res) => {

    let newId = parseInt(req.body.id);
    let newName = req.body.name;
    let newCPF = req.body.cpf;
    let newGender = req.body.gender;
    let newBirthDate = req.body.birthDate;

    let user = new User(newId, newName, newCPF, newGender, newBirthDate);

    users.push(user);

    res.send("Usuário adicionado");
});



app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});