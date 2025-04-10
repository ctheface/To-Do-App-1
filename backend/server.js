const express = require('express');
const cors = require('cors');
const app = express();
const {Pool} = require('pg');
require('dotenv').config();
const port = 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

// Get all todos
app.get('/todos', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM todos');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  
  // Create a todo
  app.post('/todos', async (req, res) => {
    const { task } = req.body;
    try {
      const result = await pool.query('INSERT INTO todos (task) VALUES ($1) RETURNING *', [task]);
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  
  // Update a todo
  app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { task, completed } = req.body;
    try {
      const result = await pool.query(
        'UPDATE todos SET task = $1, completed = $2 WHERE id = $3 RETURNING *',
        [task, completed, id]
      );
      res.json(result.rows[0]);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  
  // Delete a todo
  app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await pool.query('DELETE FROM todos WHERE id = $1', [id]);
      res.sendStatus(204);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});