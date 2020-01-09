var userLoginPage = function() {

    this.usernameInput = function() {
        var usernameInput = element(by.css('form div ._1dBPDZ'));
        expect(usernameInput.isPresent()).toBe(true, 'userName Input not found');
        return usernameInput;
    };

    this.passwordInput = function() {
        var passwordInput = element(by.css('form div ._3v41xv'));
        expect(passwordInput.isPresent()).toBe(true, 'password Input not found');
        return passwordInput;
    };

    this.loginButton = function() {
        var loginButton = element(by.css('div ._1LctnI'));
        expect(loginButton.isPresent()).toBe(true, 'login Button not found');
        return loginButton;
    };

};

module.exports = new userLoginPage();