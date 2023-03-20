const express=require('express');
const app=express();
const PORT=5000;

// Routes
const signup=require('./Routes/SignUp')
const signin=require('./Routes/SignIn')

// Body Parser
const bodyParser=require('express').json;

// For Database Connection
require('./config/db');


app.use(bodyParser());

// signup
app.use('/signup',signup);

// sigin
app.use('/signin',signin);




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});