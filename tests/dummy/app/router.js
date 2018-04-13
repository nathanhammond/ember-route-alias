import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.routerRootURL
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
});

export default Router;
