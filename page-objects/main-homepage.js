var mainHomepage = function() {

    this.searchInput = function() {
        let searchInput = element(by.css('input[name=q]'));
        expect(searchInput.isPresent()).toBe(true, 'search Input not found');
        return searchInput;
    };

};

module.exports = new mainHomepage();