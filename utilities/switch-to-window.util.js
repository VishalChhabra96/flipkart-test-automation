var switchToWindowUtil = function() {

    this.switchWindow = function() {
        browser.getAllWindowHandles().then(function(allWindowhandles) {
            browser.switchTo().window(allWindowhandles[1]);
        });
    }


};

module.exports = new switchToWindowUtil();