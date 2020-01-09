var keysUtil = function() {
    this.pressEnter = function () {
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };
};

module.exports = new keysUtil();