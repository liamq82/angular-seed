'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var myAppServices = angular.module('myApp.services', ['ngResource']);

myAppServices.value('version', '0.1');

myAppServices.factory('User', ['$resource',
    function($resource) {
        return $resource('http://localhost:8080/user');
    }
]);

myAppServices.factory('authentication', ['$resource',
    function($resource) {
        return $resource('http://localhost:8080/authentication');
    }
]);

myAppServices.factory('WindowsService', function() {
    var windows = [{
        url: 'img/windows/design_a.png',
        design: 'Design A',
        description: 'Top hung window over side hung window. Ideal for kitchen, living room and bedroom.',
        quantity: 0
    }, {
        url: 'img/windows/design_b.png',
        design: 'Design B',
        description: 'Side hung window with large fixed pane. Ideal for kitchen, living room and bedroom.',
        quantity: 0
    }, {
        url: 'img/windows/design_c.png',
        design: 'Design C',
        description: 'Side hung window with small fixed pane. Ideal for landing or small bedroom window.',
        quantity: 0
    }, {
        url: 'img/windows/design_d.png',
        design: 'Design D',
        description: 'Top hung window with large fixed pane. Ideal for kitchen, living room and bedroom.',
        quantity: 0
    }, {
        url: 'img/windows/design_e.png',
        design: 'Design E',
        description: 'Side hung window with small fixed pane. Ideal for kitchen, living room and bedroom.',
        quantity: 0
    }, {
        url: 'img/windows/design_f.png',
        design: 'Design F',
        description: 'Top hung window with small fixed pane. Ideal for landing or small bedroom window.',
        quantity: 0
    }];

    return windows;
});
