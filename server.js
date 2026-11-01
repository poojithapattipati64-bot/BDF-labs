const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express Server!');
});

app.get('/about', (req, res) => {
    res.status(200).json({
        name: 'Your Name',
        section: 'Your Section'
    });
});
app.get('/time', (req, res) => {
    res.status(200).json({
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    });
});
// 404 route
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});