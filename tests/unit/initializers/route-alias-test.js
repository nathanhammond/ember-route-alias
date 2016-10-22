import Ember from 'ember';
import RouteAliasInitializer from '../../../initializers/route-alias';
import { module, test } from 'qunit';

var application;

module('Unit | Initializer | route alias', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  },
  afterEach: function() {
    Ember.run(function() {
      application.destroy();
    });
  }
});

test('Route#setupController sets the contextRoute on the controller', function(assert) {
  RouteAliasInitializer.initialize(application);

  var route = Ember.Route.create({ routeName: 'testy-mctesterton' });
  var controller = Ember.Controller.create({ });

  assert.notOk(controller.get('contextRoute'), 'contextRoute is empty to start');

  route.setupController(controller);

  assert.equal(controller.get('contextRoute'), 'testy-mctesterton', 'contextRoute is set after setup');
});

test('RouterDSL assertions work.', function(assert) {
  RouteAliasInitializer.initialize(application);

  var DSL = new Ember.RouterDSL(null, {});

  assert.throws(
    function() { DSL.alias('asdf', '/asdf', 'target'); },
    /You must create a route prior to creating an alias\./,
    'Throws an error when you create an alias prior to generating any routes.'
  );

  assert.throws(
    function() { DSL.route('period.separated'); },
    /You may not include a "\." in your route name\./,
    'Throws an error when you attempt to create a route with a period in it.'
  );

  DSL.route('index', { path: '/' });

  assert.throws(
    function() { DSL.alias('asdf', '/asdf', 'elsewhere'); },
    /The alias target must exist before attempting to alias it\./,
    'Throws an error when you target an alias at a non-existent route.'
  );
});

test('RouterDSL#route saving of scope works as expected.', function(assert) {
  RouteAliasInitializer.initialize(application);
  var DSL = new Ember.RouterDSL(null, {});
  var stub = function() {};

  DSL.route('index', { path: '/' }, stub);
  assert.ok(DSL.handlers.index, 'Sets up a lookup for the original arguments passed in for each route.');
  assert.equal(stub, DSL.handlers.index[1], 'The saved callback is the original reference.');
});

test('RouterDSL#route invokes the original prototype.', function(assert) {
  RouteAliasInitializer.initialize(application);
  var DSL = new Ember.RouterDSL(null, {});

  let matchCalled = 0;
  function match() {
    matchCalled++;
    return {
      to() {}
    };
  }

  DSL.route('index', { path: '/' });
  DSL.generate()(match);
  assert.equal(matchCalled, 1, 'Patched DSL should still generate correct matches');
});

test('RouterDSL#alias creates the lookup.', function(assert) {
  RouteAliasInitializer.initialize(application);

  var DSL = new Ember.RouterDSL(null, {});
  assert.notOk(DSL.intercepting, 'Not set as intercepting prior to an alias call.');

  DSL.route('index', { path: '/' });

  assert.equal(DSL.intercepting.length, 0, 'Not set as intercepting prior to an alias call.');

  DSL.alias('asdf', '/asdf', 'index');

  assert.equal(DSL.intercepting.length, 1, 'Sets up intercepting to identify state.');
  assert.equal(application._routeAliasLookup['asdf'], 'index', 'Lookup entry is created for the alias route.');

  DSL.route('one', function() {
    this.route('a');
    this.alias('alias-a', '/alias-a', 'a');
  });
  DSL.alias('alias-one', '/alias-one', 'one');

  assert.equal(application._routeAliasLookup['alias-one'], 'one', 'Lookup entry is created for the alias route with nesting.');
  assert.equal(application._routeAliasLookup['alias-one/index'], 'one/index', 'Lookup entry is created for the alias route with nesting.');
  assert.equal(application._routeAliasLookup['alias-one/a'], 'one/a', 'Lookup entry is created for the alias route with nesting.');
  assert.equal(application._routeAliasLookup['alias-one/alias-a'], 'alias-one/a', 'Lookup entry is created for the alias route with nesting.');
  assert.equal(application._routeAliasLookup['one/alias-a'], 'one/a', 'Lookup entry is created for the alias route with nesting.');

  DSL.alias('not-one', '/not-one', 'alias-one');

  assert.equal(application._routeAliasLookup['not-one'], 'alias-one', 'Can alias an alias.');
  assert.equal(application._routeAliasLookup['not-one/index'], 'alias-one/index', 'Can alias an alias.');
  assert.equal(application._routeAliasLookup['not-one/a'], 'alias-one/a', 'Can alias an alias.');
  assert.equal(application._routeAliasLookup['not-one/alias-a'], 'not-one/a', 'Can alias an alias.');
});
