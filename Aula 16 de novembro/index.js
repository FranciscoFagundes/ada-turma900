const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send(`
    <h1>Hello World</h1> <br>
    `);
});

app.get('/test/:parametro', (req, res) => {
    console.log(req.params);
    if(req.params.parametro == 'lucas') {
        res.send(`
        <h1>Hello ${req.params.parametro }</h1> <br>
        `);
    }else {
        res.send('Olá estranho!');
    }
});

app.get('/json', (req, res) => {
    res.json({
        'nome': 'Francisco',
        'genero': 'masculino',
        'nacionalidade' : 'brasileiro',
        'naturalidade' : 'Recife',
        'url': 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.denofgeek.com%2Fgames%2Fpikachu-pokemon-mascot-history-nintendo%2F&psig=AOvVaw21cKK3gf3pFdQWPnfaqXRA&ust=1668714810576000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIipzJ69s_sCFQAAAAAdAAAAABAG'
    });
});


app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port}`);
})