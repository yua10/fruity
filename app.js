const express = require('express');
const app = express();
app.use(express.json());

const logger = require("./logger");
const fruitsRouter = require("./routes/fruits");

app.get('/', (req, res) => {
   res.send('Hello');
});

app.use(logger);
app.use('/fruits', fruitsRouter);

module.exports = {app};
