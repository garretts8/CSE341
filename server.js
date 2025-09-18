const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;



// Route for the root URL
app.get('/', (req, res) => {
    res.send('Howard Newman');
});

app.get('/Fabian', (req, res) => {
    res.send('Fabian Newman');
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Serving files from: ${__dirname}`);
});