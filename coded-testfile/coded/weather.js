//Bien dich code:
//-Bien dich
//-callStack -> NodeAPIs -> CallbackQueue;
//-Callqueue wont run if callStack is not empty;


console.log('Ok ong chau!');

setTimeout(() => {
    console.log('2 second later!');
}, 2000);

setTimeout(() => {
    console.log('No waiting!');
}, 2000);


console.log('Finish!');