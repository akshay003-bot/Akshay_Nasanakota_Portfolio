const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001; // Different from React's default port 3000

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Your MySQL username
    password: '9945544199@Akshay', // Your MySQL password
    database: 'contact_form_db'
});

// Connect to database
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// API endpoint to handle form submissions
app.post('/contact', (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;
    
    const sql = 'INSERT INTO contacts (firstName, lastName, email, phone, message) VALUES (?, ?, ?, ?, ?)';
    const values = [firstName, lastName, email, phone, message];
    
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).json({ 
                code: 500, 
                message: 'Database error occurred' 
            });
            return;
        }
        
        res.status(200).json({ 
            code: 200, 
            message: 'Contact saved successfully!',
            id: result.insertId 
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
