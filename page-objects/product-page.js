var product = function() {

    this.product = function() {
        let xpath = '/html/body/div[1]/div/div[3]/div[2]/div[1]/div[2]/div[2]/div';
        let dataId = '[data-id="SHOFG5UFJTKUC7DR"]';
        let product = element.all(by.css('._1HmYoV ._35HD7C')).get(2).element(by.css('div:nth-child(3)')).element(by.xpath(xpath)).element(by.css(dataId));

        expect(product.isPresent()).toBe(true, 'search Input not found');
        return product;
    };

    this.selectSize = function() {
        let selectSize = element(by.linkText('9'));
        expect(selectSize.isPresent()).toBe(true, 'search Input not found');
        return selectSize;
    }

};

module.exports = new product();