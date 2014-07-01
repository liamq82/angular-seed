'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('my app', function() {

    describe('login view', function() {

        beforeEach(function() {
            browser.get('index.html#/login');
        });

        it('should render login page when user navigates to /login', function() {
            expect(browser.getLocationAbsUrl()).toMatch("/login");
            expect(element.all(by.css('[ng-view] h1')).first().getText()).
            toMatch(/Login/);
        });

        it('should render a username and password input field', function() {
            var usernameInput = element(by.model('login.username'));
            var passwordInput = element(by.model('login.password'));
            expect(usernameInput.getAttribute('placeholder')).toBe('enter username');
            expect(passwordInput.getAttribute('placeholder')).toBe('enter password');
        });



    });

    describe('view1', function() {

        beforeEach(function() {
            browser.get('index.html#/view1');
        });


        it('should render view1 when user navigates to /view1', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/partial for view 1/);
        });

    });


    describe('view2', function() {

        beforeEach(function() {
            browser.get('index.html#/view2');
        });


        it('should render view2 when user navigates to /view2', function() {
            expect(element.all(by.css('[ng-view] p')).first().getText()).
            toMatch(/partial for view 2/);
        });

    });
});
