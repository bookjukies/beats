require('dotenv').config()
const connection = require('./controller/db/connect')
const express = require('express');
const passport = require('passport');
// const crypto = require('crypto');
const routes = require('./routes');
const session = require('express-session')
const MongoStore = require('connect-mongo')
const errorHandler = require("./middleware/errorHandler")

const {validPassword} = require('./lib/passwordUtils')

//initializing express
const app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// session middleware
app.use(session({
    secret: 'ice you',
    saveUninitialized: true,
    resave: false,
    store: MongoStore.create({
      mongoUrl: process.env.mongo_url
    }),
    cookie:{ 
        maxAge: 1000*60*60*24
    }
  }));


// const session = require('./controller/db/session')

// app.use(session(process.env.mongo_url))
   
require('./config/passport')

app.use(passport.initialize())
app.use(passport.session())

app.use(routes);

app.post("/find", async (req, res) =>{
    try {
    const uname =  req.body.uname
    
       const person = await connection.models.User.findOne({username: uname})
       const {hash, salt} = await person

   const bool = await validPassword("qws", hash, salt)

   console.log(bool);

       res.send("success")
 
        
    } catch (err) {
        res.send(err)
    }
})
//starting the server and connecting to the database
const start =  async () =>{
    try {
        await connection

        app.listen(8000, () => {
        console.log('serving on 8000')
})
    } catch (err) {
        console.log(err);
    }
}
start()

app.use(errorHandler)