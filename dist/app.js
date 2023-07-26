"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware para analisar o corpo das solicitações como JSON
app.use(body_parser_1.default.json());
// Rota de teste
app.get('/', (req, res) => {
    res.send('Seu servidor Express com TypeScript está funcionando!');
});
// Rota para cumprimentar um usuário por nome
app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.json({ message: `Hello, ${name}!` });
});
// Rota para receber dados via POST
app.post('/data', (req, res) => {
    const data = req.body;
    res.json(data);
});
// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
