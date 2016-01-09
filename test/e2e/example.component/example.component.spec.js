'use strict';

describe('The Example Component', function () {
    var exampleComponent;

    beforeEach(function () {
        browser.get('/');
        exampleComponent = require('./example.component.po.js');
    });

    it('testing page should have a title', function() {
        var subject = browser.getTitle();
        var result  = 'Angular 2 Seed Project Example';
        expect(subject).toEqual(result);
    });

    it('should include examplecomponent with correct data', function() {
        expect(exampleComponent.examplecomponent.getText()).toBe('My Example Component!');
    });

});
