const { response, urlencoded } = require('express');
const express = require('express');

const storesRouter = require('./routers/stores');
const subjectsRouter = require('./routers/subject');


const { request } = require('http');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(urlencoded());

app.use('/api/v1/stores', storesRouter); //like module.export;
app.use('/api/v1/subject', subjectsRouter); //like module.export;


app.listen(PORT, () => {
    console.log(`Express running on port ${PORT}!`);
});