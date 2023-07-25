const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'pbtransports',
  password: '123',
  port: 5432, // Porta padrão do PostgreSQL
});

app.use(express.json()); 
app.use(cors({
  origin: 'http://localhost:9000'
}));
app.get('/', (req, res) => {
  pool.query('SELECT * FROM ride', (error, result) => {
    if (error) {
      console.error('Erro ao executar a consulta', error);
      res.status(500).send('Erro ao obter dados do banco de dados');
    } else {
      res.json(result.rows); // Envia os dados como resposta em formato JSON
    }
  });
});

app.post('/dados', (req, res) => {
  const { id, where, to, client_name, time, price, is_confirmed } = req.body; // Obtém os dados do corpo da requisição

  pool.query('INSERT INTO ride (0, where, to, client_name, time, price, is_confirmed) VALUES ($1, $2, $3, $4, $5, $6, $7)', [id, where, to, client_name, time, price, is_confirmed], (error, result) => {
    if (error) {
      console.error('Erro ao executar a consulta', error);
      res.status(500).send('Erro ao criar dados no banco de dados');
    } else {
      res.status(201).send('Dados criados com sucesso'); // Resposta de sucesso
    }
  });
});

app.put('/dados/:id', (req, res) => {
  const { id } = req.params;
  const { where, to, client_name, time, price, is_confirmed} = req.body;

  pool.query('UPDATE ride SET where=$1, to=$2, client_name = $3, time = $4, price = $5, is_confirmed = $6,  WHERE id = $7', [where, to, client_name, time, price, is_confirmed, id], (error, result) => {
    if (error) {
      console.error('Erro ao executar a consulta', error);
      res.status(500).send('Erro ao atualizar dados no banco de dados');
    } else {
      res.send('Dados atualizados com sucesso'); // Resposta de sucesso
    }
  });
});

app.delete('/dados/:id', (req, res) => {
  const { id } = req.params;

  pool.query('DELETE FROM ride WHERE id = $1', [id], (error, result) => {
    if (error) {
      console.error('Erro ao executar a consulta', error);
      res.status(500).send('Erro ao excluir dados do banco de dados');
    } else {
      res.send('Dados excluídos com sucesso'); // Resposta de sucesso
    }
  });
});

app.listen(5000, () => {
  console.log('Servidor iniciado na porta 5000');
});