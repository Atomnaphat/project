const  mongoose  = require("mongoose");

const url = 'mongodb://127.0.0.1:27017/mydatabase';
mongoose.connect(url);

const db = mongoose.connection;
db.once('open', () => {
    console.log('connection successful:', url);
})

db.on('error', (err) => {
    console.error('no connection:', err);
})

const userSchema = new mongoose.Schema

module.exports = mongoose.model('users', userSchema);

