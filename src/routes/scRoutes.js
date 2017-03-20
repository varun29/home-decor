/* jshint node: true */

var express = require('express');
var scRouter = express.Router();
var router = function (nav) {
    'use strict';
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

    scRouter.route('/')
        .get(function (req, res) {
            res.render('sofaCover', {
                title: 'Index Page',
                nav: nav,
                pics: pics
            });
        });

    scRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('product', {
                title: 'Product Page',
                nav: nav,
                pic: pics[id]
            });
        });
    return scRouter;

};

module.exports = router;
