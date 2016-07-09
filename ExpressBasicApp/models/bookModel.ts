var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
    Titles: 'string',
    Author: 'string'
});