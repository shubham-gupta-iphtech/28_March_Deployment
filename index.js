import 'dotenv/config'
import express from "express"
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello, this is a home route JSON response!',
        success: true,
        data: {
            id: 1,
            name: 'Sample Data',
            timestamp: new Date().toISOString()
        }
    });
});


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
