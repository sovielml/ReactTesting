const express = require('express');
const app = express();
const port = 3001;


app.get('/api', (req, res) => {
    res.json({message: 'Hello from server you bitch!'});
});

app.listen(port, () => console.log(`listening on port http://localhost:${port}`) );