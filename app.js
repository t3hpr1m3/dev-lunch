var express = require('express'),
    request = require('request');

var app = express();

// app.use(function(req, res, next) {
//   var token = req.query.token;
//   if (token != 'SEKRET') {
//     return res.status(401).json({ error: 'Bad Token' });
//     res.status(401);
//     res.json({});
//   }
//   return next();
// });

// app.get('/', function(req, res, next) {
//   request({url: 'http://date.jsontest.com/'}, function(err, response) {
//     var json = JSON.parse(response.body);
//     return res.status(200).json({ currentTime: json.time });
//   });
// });

exports = module.exports = app;
