var express = require('express');
var indexApi = require('./api/index');
var booksApi = require('./api/books');
var path = require('path');
var mongoose = require('mongoose');
var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
var stylus = require('stylus');
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.get('/', indexApi.index);
app.get('/api/books', booksApi.list);
app.listen(app.get('port'), function () {
    console.log('Express server lunch by gulp listening on port ' + app.get('port'));
});
//# sourceMappingURL=app.js.map