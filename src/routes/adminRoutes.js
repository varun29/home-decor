/* jshint node: true */

var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var pics = [{
        url: './assets/images/ca1.jpg',
        uid: 11
    },
    {
        url: './assets/images/ca1.jpg',
        uid: 12
    },
    {
        url: './assets/images/ca1.jpg',
        uid: 13
    },
    {
        url: './assets/images/ca1.jpg',
        uid: 14
    }];

var router = function (nav) {
    'use strict';
    adminRouter.route('/addscPics')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/homeDecor';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('pics');
                collection.insertMany(pics,
                    function (err, results) {
                        res.send(results);
                        db.close();
                    });
            });
            //res.send('inserting...');
        });
    return adminRouter;
};

module.exports = router;