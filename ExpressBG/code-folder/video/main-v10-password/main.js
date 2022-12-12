const { response, urlencoded } = require('express');
const express = require('express');
const cookieParser = require('cookie-parser');
const storesRouter = require('./routers/stores');
const subjectsRouter = require('./routers/subject');
const session = require('express-session');
const authRouter = require('./routers/auth');
const { request } = require('http');
const app = express();
const PORT = 3000;

app.use(session({
    secret: 'DGIWNWEONGWIONDGBOWGIWENGWJEBG',
    resave: false,
    saveUninitialized: false,


}));
app.use((req, res, next) => {
    console.log(`${req.method}:${req.url}`);
    next();
});
app.use(express.json());
app.use(urlencoded());
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);

app.use((request, response, next) => {
    if (request.session.user) next();
    else response.send(401);
})

app.use('/api/v1/stores', storesRouter); //like module.export;
app.use('/api/v1/subject', subjectsRouter); //like module.export;



app.listen(PORT, () => {
    console.log(`Express running on port ${PORT}!`);
});