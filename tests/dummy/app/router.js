import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('one', function() {
    this.route('a', function () {
      this.route('i', function() {});
      this.route('ii');
      this.route('iii');

      this.alias('alias-i', '/alias-i', 'i');
    });
    this.route('b');
    this.route('c');

    this.alias('alias-a', '/alias-a', 'a');
  });
  this.route('two');
  this.route('three');

  this.alias('alias-one', '/alias-one', 'one');
  this.alias('not-one', '/not-one', 'alias-one');

  this.route('non-terminal', function() {
    this.route('index', { path: '/', terminal: 'non-terminal.terminal' });
    this.route('sibling', { terminal: 'non-terminal.terminal' });
    this.route('terminal');
  });
});

export default Router;
