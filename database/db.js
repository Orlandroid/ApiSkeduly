const mongoose = require('mongoose')
var env = require('dotenv').config();

const url = "mongodb+srv://"+process.env.DB_USER+":"+process.env.DB_PASS+"@cluster0.woog5.mongodb.net/Escuela?retryWrites=true&w=majority";

const connectionParams={
    useNewUrlParser: true
}
const db = mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

    


module.exports = db
