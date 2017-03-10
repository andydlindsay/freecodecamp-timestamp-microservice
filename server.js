var express = require('express');
var moment = require('moment');

var app = express();

app.use(express.static(__dirname + '/templates'));

app.get('/:time', function(req, res) {
    var returnObj = {
        unix: null,
        natural: null
    };
    var timestamp = req.params.time;
    var m = moment(isNaN(timestamp) ? timestamp : +timestamp);
    if (m.isValid()) {
        returnObj.unix = m.unix();
        returnObj.natural = m.format('MMMM D, YYYY');
    }
    res.send(returnObj);
});

app.get('*', function (req, res) {
    res.render('index');
});

app.listen(process.env.PORT, function () {
    console.log('app listening on port ' + process.env.PORT);
});