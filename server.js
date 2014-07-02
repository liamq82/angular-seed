var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/users');
app.use(bodyParser());

var port = process.env.PORT || 8080; // set our port

var User = require('./app/models/user');

var router = express.Router(); // get an instance of the express Router

router.route('/user').post(function(req, res) {

    var user = new User(); // create a new instance of the Bear model
    user.username = req.body.username; // set the bears name (comes from the request)
    user.password = req.body.password;

    // save the bear and check for errors
    user.save(function(err) {
        if (err)
            res.send(err);

        res.json({
            message: 'User created!'
        });
    });

});

router.route('/user').get(function(req, res) {
    User.find(function(err, users) {
        if (err)
            res.send(err);

        res.json(users);
    });
});

router.route('/user').delete(function(req, res) {
    User.remove({
        _id: req.params.user_id
    }, function(err, user) {
        if (err)
            res.send(err);

        res.json({ message: 'User successfully deleted' });
    });
});

app.use(router);

app.listen(port);
console.log('Magic happens on port ' + port);
