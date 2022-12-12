const { Router, response } = require('express');

const router = Router();

const subject = [
    {
        subject: 'math',
        value: 10,
        id: 1
    },
    {
        subject: 'physics',
        value: 15,
        id: 2
    },
    {
        subject: 'science',
        value: 5,
        id: 3
    },
    {
        subject: 'geography',
        value: 5,
        id: 4
    }
];

router.get('', (request, response) => {
    console.log(request.query);

    const { id, value } = request.query;

    const parseID = parseInt(id);
    const parseValue = parseInt(value);
    if (!isNaN(parseID)) {
        const filterID = subject.filter((s) => s.id === parseID && s.value === parseValue);
        //thoa man 2 yeu cau la ID = id va value = value;
        response.send(filterID);
    }
    else response.send(subject); //parseID is not an interger


    //response.send(subject);
})



// app.get('/stores/:type/value', (request, response) => {
//     //console.log(request.params.foodType);

//     const { type } = request.params;

//     const storesItem = stores.find((g) => g.item === type);
//     console.log(storesItem.value);
//     response.send(storesItem);
// });

module.exports = router;