const express = require('express');
const PORT = process.env || 8000;
const app = express();



app.listen(PORT, () => {
    console.log(`App Running at http://localhost:${PORT}`);
});
