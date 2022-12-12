const { Router, response } = require('express');

const router = Router();

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



router.get('/', (request, response) => {
    response.send(stores);
});

router.get('/:type', (request, response) => {
    //console.log(request.params.foodType);

    const { type } = request.params;

    const storesItem = stores.find((g) => g.item === type);

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