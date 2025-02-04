const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')


const authRoute = require('./routes/auth');
const orgRoute = require('./routes/org');
const donationRoute = require('./routes/transfer');


const app = express()
const port = 8000


app.use(express.json());
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true, httpOnly: true }
}));

// Routes


app.use('/auth/', authRoute);
app.use('/org/', orgRoute);
app.use('/transfer/', donationRoute);


app.listen(port, () => {
    console.log(`server is listening on ${port}`)
})

