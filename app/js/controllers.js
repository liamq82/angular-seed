'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope',
        function($scope) {

        }
    ])
    .controller('LoginController', ['$scope', 'User',
        function($scope, User) {
            $scope.user = new User();

            $scope.login = {
                'username': 'enter username',
                'password': 'enter password'
            };

            $scope.loginButtonClick = function() {
                $scope.user.username = $scope.login.username;
                $scope.user.password = $scope.login.password;
                $scope.user.$save(function(response) {
                    if (response.message) {
                        console.log('user logged in');
                    } else {
                        console.log('user not found');
                    }
                });

            }

        }
    ])
    .controller('MyCtrl2', ['$scope',
        function($scope) {

        }
    ]);
