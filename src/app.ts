//importei o módulo express 
import express, { Request, Response } from 'express';
//importei uma biblioteca que nos ajudará a analisar o corpo das solicitações.
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

// Middleware para analisar o corpo das solicitações como JSON
app.use(bodyParser.json());

// Rota de teste
app.get('/', (req: Request, res: Response) => {
  res.send('Seu servidor Express com TypeScript está funcionando!');
});

// Rota para cumprimentar um usuário por nome
app.get('/hello/:name', (req: Request, res: Response) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}!` });
});

// Rota para receber dados via POST
app.post('/data', (req: Request, res: Response) => {
  const data = req.body;
  res.json(data);
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
