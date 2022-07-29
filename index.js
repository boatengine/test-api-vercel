const express = require('express');
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`App run on port ${PORT}`);
})

app.get('/', (req, res => {
    res.send('This is my api');
}))

app.get('/about', (req, res) => {
    res.send('this is my about route');
})


module.exports = app;
