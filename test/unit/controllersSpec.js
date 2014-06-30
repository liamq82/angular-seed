'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {
    beforeEach(module('myApp.controllers'));

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
});
