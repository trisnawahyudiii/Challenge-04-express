const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');

// cars
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/cars', (req, res) => {
    res.render('cariMobil');
});
app.use('/', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`App Running at http://localhost:${PORT}`);
});
