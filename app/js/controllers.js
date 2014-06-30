'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope',
        function($scope) {

        }
    ])
    .controller('LoginController', ['$scope',
        function($scope) {
            $scope.login = {
                'username': 'enter username',
                'password': 'enter password'
            };
        }
    ])
    .controller('MyCtrl2', ['$scope',
        function($scope) {

        }
    ]);
