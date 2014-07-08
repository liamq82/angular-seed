'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
    .controller('MyCtrl1', ['$scope',
        function($scope) {

        }
    ])
    .controller('LoginController', ['$scope', 'User', '$location',
        function($scope, User, location) {
            $scope.user = new User();

            $scope.login = {
                'username': 'enter username',
                'password': 'enter password'
            };

            $scope.loginButtonClick = function() {
                $scope.user.username = $scope.login.username;
                $scope.user.password = $scope.login.password;
                $scope.user.$save(function(response) {
                    if (response.authentication) {
                        console.log('user found');
                        location.path('/windowOrDoor');
                    } else {
                        console.log('user not found');
                    }
                });

            }

        }
    ])
    .controller('ChooseController', ['$scope', 'authentication', '$location',
        function($scope, authentication, location) {
            $scope.authentication = new authentication();

            $scope.authentication.$get(function(response) {
                if (response.authentication === false) {
                    alert('Must log in first!');
                }
            });

            $scope.selection = 'Please make a selection'
            $scope.radioModel = 'Window';
            $scope.url = '/select' + $scope.radioModel;

            $scope.checkModel = {
                left: true,
                right: false
            };

            $scope.nextButton = function() {
                location.path($scope.url);
            };
        }
    ])
    .controller('SelectWindowDesignController', ['$scope', 'WindowsService',
        function($scope, WindowsService) {
            $scope.windows = WindowsService;

            $scope.add = function($index) {
                $scope.windows[$index].quantity++;
            }

            $scope.remove = function($index) {
                if ($scope.windows[$index].quantity > 0) {
                    $scope.windows[$index].quantity--;
                }
            }

            $scope.next = function() {
                var windowSelected = false;
                angular.forEach($scope.windows, function(window, key) {
                    if(window.quantity > 0){
                        windowSelected = true;
                    }
                });
                if(!windowSelected){
                    alert('You have not selected any windows yet!');
                }
            }
        }
    ])
    .controller('MyCtrl2', ['$scope',
        function($scope) {

        }
    ]);
