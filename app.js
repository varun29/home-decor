/* jshint node: true */

var express = require('express');
var nav = [{
    Link: '/SofaCovers',
    Text: 'Sofa Covers'
},
{
    Link: '/CushionCovers',
    Text: 'Cushion Covers'
}];

var scRouter = require('./src/routes/scRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

var app = express();
var port = 8080;

//app.use(express.static('src/views'));
app.use(express.static('assets/images'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/SofaCovers', scRouter);
app.use('/Admin', adminRouter);

app.get('/', function (req, res) {
    'use strict';
    //res.send('hello server');
    res.render('index', {
        title: 'Index Page',
        nav: [{
            Link: '/SofaCovers',
            Text: 'Sofa Covers'
        },
        {
            Link: '/CushionCovers',
            Text: 'Cushion Covers'
        }]
    });
});

// app.get('/sofacovers', function (req, res) {
//     'use strict';
//     //res.send('hello server');
//     res.render('sofaCover');
// });

app.listen(port, function () {
    'use strict';
    console.log('running server on port ' + port);
});