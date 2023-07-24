//impoortei o módulo express 
const express = require ('express');

//iniciei o express
const app = express();

//criei uma rota para a pag inicial 
app.get('/', (req, res) => {
    res.send('Olá, este é o backend com o node.js!')
}); 

const port = 3000;

app.listen(port, () => {
    console.log(`Servidor está rodando em http://localhost:${port}`)
});

