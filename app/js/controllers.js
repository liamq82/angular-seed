'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope',
        function($scope) {

        }
    ])
    .controller('LoginController', ['$scope', 'User',
        function($scope, User) {
            $scope.login = {
                'username': 'enter username',
                'password': 'enter password'
            };

            $scope.login = function() {
                $scope.user = User.get();
            }

        }
    ])
    .controller('MyCtrl2', ['$scope',
        function($scope) {

        }
    ]);
