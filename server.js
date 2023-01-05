// const routes = require('matchup-routes.js');
// app.use(routes);
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// a message to show it has worked successfully
app.listen(PORT, () => console.log(`Dookie hears you port ${PORT} 💩`));