'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'ngRoute',
    'myApp.filters',
    'myApp.services',
    'myApp.directives',
    'myApp.controllers',
    'ui.bootstrap'
]).
config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'partials/partial1.html',
            controller: 'MyCtrl1'
        });
        $routeProvider.when('/view2', {
            templateUrl: 'partials/partial2.html',
            controller: 'MyCtrl2'
        });
        $routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        });
        $routeProvider.when('/windowOrDoor', {
            templateUrl: 'partials/windowOrDoor.html',
            controller: 'ChooseController'
        });
        $routeProvider.when('/selectWindow', {
            templateUrl: 'partials/selectWindowDesign.html',
            controller: 'SelectWindowDesignController'
        });
        $routeProvider.otherwise({
            redirectTo: '/view1'
        });
    }
]);
