'use strict';

describe('Component: CensusComponent', function() {
  // load the controller's module
  beforeEach(module('dataikuTestApp.census'));

  var CensusComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    CensusComponent = $componentController('census', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
