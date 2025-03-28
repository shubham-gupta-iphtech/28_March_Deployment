const express = require('express');
const app = express();
const port = 3000;

// Sample JSON response
app.get('/sample', (req, res) => {
    res.json({
        message: 'Hello, this is a sample JSON response!',
        success: true,
        data: {
            id: 1,
            name: 'Sample Data',
            timestamp: new Date().toISOString()
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
