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

    describe('Window or door selection', function() {

        beforeEach(function() {
            browser.get('index.html#/windowOrDoor');
        });

        it('should render window or door page when user navigates to window or door page and is logged in.', function() {
            expect(element.all(by.css('[ng-view] h4')).first().getText()).
            toMatch(/What would you like to build?/);
        });

        it('should tell user that door is currently selected', function() {
            var selection = element(by.css('.selection'));
            expect(selection.getText()).toMatch(/You have selected Window/);
        });

        it('should change based on users selection', function() {
            var buttons = element.all(by.css('.btn'));
            expect(buttons.count()).toBe(3);
            buttons.get(1).click();
            expect(element(by.css('.selection')).getText()).toMatch(/You have selected Door/);
        });

    });

    describe('Select window design view', function() {

        beforeEach(function() {
            browser.get('index.html#/selectWindow');
        });

        it('should render selectWindow view when user navigates to /selectWindow', function() {
            expect(element.all(by.css('[ng-view] h1')).first().getText()).
            toMatch(/Select design/);
        });

        it('should render 6 window designs', function() {
            var windows = element.all(by.repeater('window in windows'));
            expect(windows.count()).toBe(6);
        });

        it('should be able to increase the quantity of window design A by pressing the add button for this window', function() {
            var addButtons = element.all(by.buttonText('Add'));
            expect(addButtons.count()).toBe(6);

            element.all(by.css('.panel-body')).then(function(panels) {
                expect(panels.length).toBe(6);
                expect(panels[0].getText()).toBe('0 windows');
            });

            addButtons.get(0).click();
            element.all(by.css('.panel-body')).then(function(panels) {
                expect(panels.length).toBe(6);
                expect(panels[0].getText()).toBe('1 windows');
            });

            addButtons.get(0).click();
            element.all(by.css('.panel-body')).then(function(panels) {
                expect(panels.length).toBe(6);
                expect(panels[0].getText()).toBe('2 windows');
            });
        });

        it('should be able to increase/decrease the quantity of window design B by pressing the add/remove button for this window but should not decrease quantity below 0', function() {
            var addButtons = element.all(by.buttonText('Add'));
            var removeButtons = element.all(by.buttonText('Remove'));
            expect(addButtons.count()).toBe(6);

            element.all(by.css('.panel-body')).then(function(panels) {
                expect(panels.length).toBe(6);
                expect(panels[1].getText()).toBe('0 windows');
            });

            addButtons.get(1).click();
            element.all(by.css('.panel-body')).then(function(panels) {
                expect(panels.length).toBe(6);
                expect(panels[1].getText()).toBe('1 windows');
            });

            removeButtons.get(1).click();
            element.all(by.css('.panel-body')).then(function(panels) {
                expect(panels.length).toBe(6);
                expect(panels[1].getText()).toBe('0 windows');
            });

            removeButtons.get(1).click();
            element.all(by.css('.panel-body')).then(function(panels) {
                expect(panels.length).toBe(6);
                expect(panels[1].getText()).toBe('0 windows');
            });
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
