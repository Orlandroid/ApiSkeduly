const mongoose = require('mongoose')

const url = "mongodb+srv://introabd:introabd1234@cluster0.woog5.mongodb.net/Escuela?retryWrites=true&w=majority";

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
