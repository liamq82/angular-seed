var express = require('express'); // call express
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/users');

var app = express();
app.use(cookieParser());
app.use(bodyParser());
app.use(session({
    secret: 'keyboard cat'
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

function ensureAuthenticated(req, res, next) {
    console.log('ensure authentication: ', req.isAuthenticated());
    if (req.isAuthenticated()) {
        return next();
    }
    res.send({
        authentication: false,
        url: '/login'
    });
}

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
            if (err) {
                console.log(err);
                return done(err);
            }
            if (!user) {
                console.log('user not found');
                return done(null, false, {
                    message: 'Incorrect username.'
                });
            }
            if (!user.validPassword(password)) {
                console.log('invalid password');
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            console.log(user.username + ' logged in');

            return done(null, user);
        });
    }
));

var port = process.env.PORT || 8080; // set our port

var User = require('./app/models/user');

var router = express.Router(); // get an instance of the express Router

app.post('/user',
    passport.authenticate('local', {
        failureRedirect: 'http://localhost:8000/app/#/view1',
        failureFlash: false
    }), function(req, res) {
        res.send({
            authentication: true,
            redirect: '/windowOrDoor'
        });

    });


router.route('/adduser').post(function(req, res) {

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

        res.json({
            message: 'User successfully deleted'
        });
    });
});

app.get('/authentication', ensureAuthenticated,
    function(req, res) {
       res.json({
            authenticated: 'true'
        }); 
});


app.use(router);

app.listen(port);
console.log('Magic happens on port ' + port);
