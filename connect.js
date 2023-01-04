require('dotenv').config()
const mongoose = require('mongoose')


mongoose.set("strictQuery", false)


const connection = mongoose.createConnection(process.env.mongo_url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })


// Creates simple schema for a User.  The hash and salt are derived from the user's given password when they register
    const UserSchema = new mongoose.Schema({
        username: String,
        hash: String,
        salt: String
    });

const User = connection.model('User', UserSchema);

module.exports = connection

 