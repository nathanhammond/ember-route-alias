import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';

module('Acceptance | terminal', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting non-terminal route ends up on correct page', function(assert) {
  visit('/non-terminal');

  andThen(function() {
    assert.equal(currentURL(), '/non-terminal/terminal');
  });
});

test('visiting non-terminal route with no path ends up on correct page', function(assert) {
  visit('/non-terminal/sibling');

  andThen(function() {
    assert.equal(currentURL(), '/non-terminal/terminal');
  });
});
