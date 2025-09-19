var express = require('express');
const path = require('path');
var app = express();
const PORT = process.env.PORT || 3000;

app.use('/', require('./routes/index.js'));

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Serving files from: ${__dirname}`);
});
