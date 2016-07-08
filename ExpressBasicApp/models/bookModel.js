var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
    Title : { type: String },
    Pages : { type: Number },
    IsRead : { type: Boolean }
});

module.exports = mongoose.model('Books',bookModel)