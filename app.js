const express = require('express');
const cors = require('cors')
const app = express();


const logger = require("./logger");
const fruitsRouter = require("./routes/fruits");

app.use(cors())
app.use(express.json());
app.use(logger);


app.get('/', (req, res) => {
   res.send('Hello, I am Fruity');
});

app.use('/fruits', fruitsRouter);

module.exports = {app};
