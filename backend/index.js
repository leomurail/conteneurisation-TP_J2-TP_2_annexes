const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get('/api/message', async (req, res) => {
  try {
    const result = await pool.query('SELECT content FROM messages LIMIT 1');
    if (result.rows.length > 0) {
      res.json({ message: result.rows[0].content });
    } else {
      res.json({ message: "Hello from backend (no db data)" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection error' });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening on port ${port}`);
});
