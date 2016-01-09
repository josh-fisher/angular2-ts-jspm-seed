/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var ExampleComponent = function() {
  this.examplecomponent = element(by.deepCss('example-component /deep/ .examplecomponent'));
};

module.exports = new ExampleComponent();
