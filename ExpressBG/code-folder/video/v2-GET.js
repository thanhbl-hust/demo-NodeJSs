const { response } = require('express');
const express = require('express');
const { request } = require('http');
const app = express();
const PORT = 3000;

const stores = [
    {
        item: 'food',
        value: 10
    },
    {
        item: 'meat',
        value: 15
    },
    {
        item: 'noodle',
        value: 5
    }
];

app.listen(PORT, () => {
    console.log(`Express running on port ${PORT}!`);
});

app.get('/stores', (request, response) => {
    response.send(stores);
});