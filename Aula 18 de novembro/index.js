const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     console.log(`Método de chamada: ${req.method} -  URL: ${req.url}`);
//     next();
// });

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

app.get('/user/:name', (req, res) => {
    const { name } = req.params;
    const userName = users.find((user) => user.name.toUpperCase() == name.toUpperCase());
    userName ? res.send(userName) : res.status(404).send("Usuário não encontrado");
});

class User {
    constructor(id, name, cpf, gender, birthDate) {
        this.id = id;
        this.name = name;
        this.cpf = cpf;
        this.gender = gender;
        this.birthDate = birthDate;
    }
}

checkAuthorization = (req, res, next) => {
    console.log("Checando autorização");
    const { authorization } = req.headers;

    if (authorization == '1234') {
        next();
    } else {
        res.status(403).send("Acesso Proibido");
    }
}

app.post('/addUser', checkAuthorization, (req, res) => {
    let newId = parseInt(req.body.id);
    let newName = req.body.name;
    let newCPF = req.body.cpf;
    let newGender = req.body.gender;
    let newBirthDate = req.body.birthDate;

    if (newName && newName != null) {
        let user = new User(newId, newName, newCPF, newGender, newBirthDate);
        users.push(user);
        res.status(201).send("Usuário adicionado");
    } else {
        res.status(200).send("Campo de nome obrigatório");
    }
}
);

app.put('/updateUser', checkAuthorization, (req, res) => {
    res.send("usuário atualizado");
});



app.get('/signin', (res,req, next) => {
    res.cookie('session_id', '12345');
    res.status(200).json({ "msg" : "Usuário Logado"});
});

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
});

