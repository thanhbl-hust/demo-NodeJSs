const { Router } = require('express');

const router = Router();

const stores = [
    {
        subject: 'math',
        value: 10
    },
    {
        subject: 'physics',
        value: 15
    },
    {
        subject: 'science',
        value: 5
    }
];

router.get('/', (request, response) => {
    response.send(stores);
});

router.get('/:type', (request, response) => {
    //console.log(request.params.foodType);

    const { type } = request.params;

    const storesItem = stores.find((g) => g.subject === type);

    response.send(storesItem);
});

router.post('/', (request, response) => {
    stores.push(request.body);
    //console.log('Added item: ');
    console.log(request.body);
    //console.log('Items now: ');
    console.log(stores);
    response.send(201);
})



// app.get('/stores/:type/value', (request, response) => {
//     //console.log(request.params.foodType);

//     const { type } = request.params;

//     const storesItem = stores.find((g) => g.item === type);
//     console.log(storesItem.value);
//     response.send(storesItem);
// });

module.exports = router;