const { response, urlencoded } = require('express');
const express = require('express');
const { request } = require('http');
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(urlencoded());
const stores = [
    {
        item: 'milk',
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

app.get('/stores/:type', (request, response) => {
    //console.log(request.params.foodType);

    const { type } = request.params;

    const storesItem = stores.find((g) => g.item === type);

    response.send(storesItem);
});

// app.get('/stores/:type/value', (request, response) => {
//     //console.log(request.params.foodType);

//     const { type } = request.params;

//     const storesItem = stores.find((g) => g.item === type);
//     console.log(storesItem.value);
//     response.send(storesItem);
// });


app.post('/stores', (request, response) => {
    stores.push(request.body);
    console.log('Added item: ');
    console.log(request.body);
    console.log('Items now: ');
    console.log(stores);
    response.send(201);
})