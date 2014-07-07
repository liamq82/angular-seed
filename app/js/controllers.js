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
    .controller('SelectWindowDesignController', ['$scope',
        function($scope) {

            $scope.windows = [{
                url: 'img/windows/design_a.png',
                design: 'Design A',
                description: 'Top hung window over side hung window. Ideal for kitchen, living room and bedroom.'
            }, {
                url: 'img/windows/design_b.png',
                design: 'Design B',
                description: 'Side hung window with large fixed pane. Ideal for kitchen, living room and bedroom.'
            }, {
                url: 'img/windows/design_c.png',
                design: 'Design C',
                description: 'Side hung window with small fixed pane. Ideal for landing or small bedroom window.'
            },{
                url: 'img/windows/design_a.png',
                design: 'Design D',
                description: 'Top hung window over side hung window. Ideal for kitchen, living room and bedroom.'
            }, {
                url: 'img/windows/design_b.png',
                design: 'Design E',
                description: 'Side hung window with large fixed pane. Ideal for kitchen, living room and bedroom.'
            }, {
                url: 'img/windows/design_c.png',
                design: 'Design F',
                description: 'Side hung window with small fixed pane. Ideal for landing or small bedroom window.'
            }];

            $scope.window = {
                design: 'Design A',
                description: 'Top hung window over side hung window. Ideal for kitchen, living room and bedroom.'
            };
        }
    ])
    .controller('MyCtrl2', ['$scope',
        function($scope) {

        }
    ]);
