var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser());

var port = process.env.PORT || 8080; // set our port

var router = express.Router(); // get an instance of the express Router

app.post('/user', function(req, res) {
        // `req.user` contains the authenticated user.
        console.log(req.body);
        //res.redirect('http://localhost:8000/app/#/inventory');
        res.send({
            message: 'Login reuqest recieved!',
            user: req.body.username,
            password: req.body.password
        });

});

router.route('/user').get(function(req, res) {
    res.json([{
        'username': 'liam',
        'password': 'hello'
    }, {
        'username': 'john',
        'password': 'goodbye'
    }, {
        'username': 'jamie',
        'password': 'gone'
    }, {
        'username': 'gar',
        'password': 'done'
    }]);
});

router.route('/user/:user_id').get(function(req, res) {
    var id = req.params.user_id;
    var user = {
        'id': id,
        'username': 'test user',
        'password': 'test password'
    };
    res.json(user);
});

app.use(router);

app.listen(port);
console.log('Magic happens on port ' + port);
