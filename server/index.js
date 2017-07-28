var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Doc = require('./api/models/redactorModel'),
    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/local');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

var routes = require('./api/routes/redactorRoutes');
routes(app);

app.listen(port);

console.log('mwd API server started on: ' + port);

