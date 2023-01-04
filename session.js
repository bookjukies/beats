const session = require('express-session')
const MongoStore = require('connect-mongo')

const sessionMiddleware = (uri)=>{
    return session({
        secret: 'ice you',
        saveUninitialized: true,
        resave: false,
        store: MongoStore.create({
          mongoUrl: uri
        }),
        cookie:{ 
            maxAge: 1000*60*60*24
        }
      })
}

module.exports = sessionMiddleware