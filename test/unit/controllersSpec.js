'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {

    beforeEach(function() {
        this.addMatchers({
            toEqualData: function(expected) {
                return angular.equals(this.actual, expected);
            }
        });
    });

    beforeEach(module('myApp.controllers'));
    beforeEach(module('myApp.services'));

    it('should create login model with username and password', inject(function($controller) {
        var scope = {},
            LoginController = $controller('LoginController', {
                $scope: scope
            });
        expect(LoginController).toBeDefined();
        expect(scope.login).toBeDefined();
        expect(scope.login.username).toEqual('enter username');
        expect(scope.login.password).toEqual('enter password');

    }));


    it('should ....', inject(function($controller) {
        //spec body
        var myCtrl1 = $controller('MyCtrl1', {
            $scope: {}
        });
        expect(myCtrl1).toBeDefined();
    }));

    it('should ....', inject(function($controller) {
        //spec body
        var myCtrl2 = $controller('MyCtrl2', {
            $scope: {}
        });
        expect(myCtrl2).toBeDefined();
    }));

    describe('LoginController', function() {
        var scope, ctrl, $httpBackend;

        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectPOST('http://localhost:8080/user').
            respond({
                message: 'Login reuqest recieved!',
                user: 'liam',
                password: '12345'
            });

            scope = $rootScope.$new();
            ctrl = $controller('LoginController', {
                $scope: scope
            });
        }));


        it('should create user model with four users fetched from server', function() {
            expect(scope.user).toBeDefined();
            scope.loginButtonClick();
            $httpBackend.flush();

            expect(scope.user).toEqualData({
                message: 'Login reuqest recieved!',
                user: 'liam',
                password: '12345'
            });
        });
    });

    describe('ChooseController', function() {

        it('should create a radio model to hold window/door selection', inject(function($controller) {
            var scope = {},
                ChooseController = $controller('ChooseController', {
                    $scope: scope
                });
            expect(ChooseController).toBeDefined();
            expect(scope.selection).toBeDefined();
            expect(scope.radioModel).toEqual('Window');
            expect(scope.checkModel).toEqual({
                left: true,
                right: false
            });
            expect(scope.url).toEqual('/selectWindow');
        }));


    });

    describe('SelectWindowDesignController', function() {

        it('should create a window model object', inject(function($controller) {
            var scope = {},
                ChooseController = $controller('SelectWindowDesignController', {
                    $scope: scope
                });
            expect(ChooseController).toBeDefined();
            expect(scope.window).toEqual({
                design: 'Design A',
                description: 'Top hung window over side hung window. Ideal for kitchen, living room and bedroom.'
            });

        }));


    });


});
