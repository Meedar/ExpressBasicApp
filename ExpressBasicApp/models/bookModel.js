var mongoose = require('mongoose'), Schema = mongoose.Schema;
var bookModel = new Schema({
    title: { type: String },
    author: { type: String }
});
module.exports = mongoose.model('books', bookModel);
//# sourceMappingURL=bookModel.js.map