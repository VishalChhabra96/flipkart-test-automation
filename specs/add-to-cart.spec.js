const userLoginPage = require('../page-objects/user-login-page'),
    mainHomepage = require('../page-objects/main-homepage'),
    productPage = require('../page-objects/product-page'),
    switchToWindowUtil = require('../utilities/switch-to-window.util'),
    keysUtil = require('../utilities/keys.util'),
    JSONData = require('../test-data/test-data.json');

describe("Flipkart add to cart operation", function() {

    beforeAll(function() {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
    });

    it("Validate page url", function() {
        browser.driver.get(JSONData.data[0].url);
        expect(browser.getCurrentUrl()).toEqual(JSONData.data[0].url);
    });

    it("Authenticate user Login", function() {
        userLoginPage.usernameInput().sendKeys(JSONData.data[0].username);
        userLoginPage.passwordInput().sendKeys(JSONData.data[0].password);
        userLoginPage.loginButton().click();
        browser.sleep(5000);
    });

    it('Search a product', function() {
        mainHomepage.searchInput().sendKeys(JSONData.data[0].product);
        keysUtil.pressEnter();
        browser.sleep(10000);
    });

    it('Click on the product', function() {
        productPage.product().click();
    });

    it('Perform add to cart operation on New Window', function() {
        switchToWindowUtil.switchWindow();
        productPage.selectSize().click();
        browser.sleep(10000);
    });

});
