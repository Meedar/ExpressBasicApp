var mongoose = require('mongoose');

var db = mongoose.connection;

//connection db  
db.on('error', function (err) {
    throw err
});
db.on('open', function callback() {
    console.log('Connection to MyFirstHomeDb is succefully !');
});
db.on('close', function () {
    console.log('Connection to MyFirstHomeDb is closed !');
});


export function ConnectionDb() {
    mongoose.connect('mongodb://127.0.0.1/MyFirstHomeDb');
};

export function CloseDb() {
    db.close();
};