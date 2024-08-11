import express from 'express'; 
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected as id ' + db.threadId);
});

// Get all flashcards
app.get('/api/flashcards', async (req, res) => {
    try {
        db.query('SELECT * FROM flashcards', (err, results) => {
            if (err) {
                console.error('Error fetching flashcards:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.json(results);
        });
    } catch (error) {
        console.error('Error in GET /api/flashcards:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add a new flashcard
app.post('/api/flashcards', async (req, res) => {
    try {
        const { question, answer } = req.body;
        if (!question || !answer) {
            return res.status(400).json({ error: 'Question and answer are required' });
        }

        db.query('INSERT INTO flashcards (question, answer) VALUES (?, ?)', [question, answer], (err) => {
            if (err) {
                console.error('Error adding flashcard:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.status(201).send();
        });
    } catch (error) {
        console.error('Error in POST /api/flashcards:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a flashcard
app.put('/api/flashcards/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { question, answer } = req.body;
        if (!question || !answer) {
            return res.status(400).json({ error: 'Question and answer are required' });
        }

        db.query('UPDATE flashcards SET question = ?, answer = ? WHERE id = ?', [question, answer, id], (err, results) => {
            if (err) {
                console.error('Error updating flashcard:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'Flashcard not found' });
            }
            res.json({ id, question, answer });
        });
    } catch (error) {
        console.error('Error in PUT /api/flashcards/:id:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a flashcard
app.delete('/api/flashcards/:id', async (req, res) => {
    try {
        const { id } = req.params;
        db.query('DELETE FROM flashcards WHERE id = ?', [id], (err) => {
            if (err) {
                console.error('Error deleting flashcard:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.sendStatus(204); // No Content
        });
    } catch (error) {
        console.error('Error in DELETE /api/flashcards/:id:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
