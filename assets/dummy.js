"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment', 'ember-route-alias/mixins/route-alias-resolver'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment, _emberRouteAliasMixinsRouteAliasResolver) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default'].extend(_emberRouteAliasMixinsRouteAliasResolver['default'])
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/rel-link-to', ['exports', 'ember-route-alias/components/rel-link-to'], function (exports, _emberRouteAliasComponentsRelLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRouteAliasComponentsRelLinkTo['default'];
    }
  });
});
define('dummy/ember-route-alias/tests/modules/ember-route-alias/components/rel-link-to.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-route-alias/components/rel-link-to.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-route-alias/components/rel-link-to.js should pass jshint.');
  });
});
define('dummy/ember-route-alias/tests/modules/ember-route-alias/initializers/route-alias.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-route-alias/initializers/route-alias.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-route-alias/initializers/route-alias.js should pass jshint.');
  });
});
define('dummy/ember-route-alias/tests/modules/ember-route-alias/mixins/rel-link-to.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-route-alias/mixins/rel-link-to.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-route-alias/mixins/rel-link-to.js should pass jshint.');
  });
});
define('dummy/ember-route-alias/tests/modules/ember-route-alias/mixins/route-alias-resolver.jshint.lint-test', ['exports'], function (exports) {
  QUnit.module('JSHint | modules/ember-route-alias/mixins/route-alias-resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-route-alias/mixins/route-alias-resolver.js should pass jshint.');
  });
});
define('dummy/helpers/app-version', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _dummyConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  var _config$APP = _dummyConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/route-alias', ['exports', 'ember-route-alias/initializers/route-alias'], function (exports, _emberRouteAliasInitializersRouteAlias) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRouteAliasInitializersRouteAlias['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberRouteAliasInitializersRouteAlias.initialize;
    }
  });
});
define('dummy/mixins/rel-link-to', ['exports', 'ember-route-alias/mixins/rel-link-to'], function (exports, _emberRouteAliasMixinsRelLinkTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRouteAliasMixinsRelLinkTo['default'];
    }
  });
});
define('dummy/mixins/route-alias-resolver', ['exports', 'ember-route-alias/mixins/route-alias-resolver'], function (exports, _emberRouteAliasMixinsRouteAliasResolver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRouteAliasMixinsRouteAliasResolver['default'];
    }
  });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType,
    rootURL: _dummyConfigEnvironment['default'].routerRootURL
  });

  Router.map(function () {
    this.route('one', function () {
      this.route('a', function () {
        this.route('i', function () {});
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

  exports['default'] = Router;
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Ember Route Alias\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"application\"],null,69],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"index\"],null,68],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one\"],null,67],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.index\"],null,66],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.a\"],null,65],[\"text\",\"\\n            \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.a.index\"],null,64],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.a.i\"],null,63],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.a.ii\"],null,62],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.a.iii\"],null,61],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.a.alias-i\"],null,60],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.b\"],null,59],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.c\"],null,58],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"two\"],null,57],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"three\"],null,56],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"application\"],null,55],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"index\"],null,54],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one\"],null,53],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.index\"],null,52],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.a\"],null,51],[\"text\",\"\\n            \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.a.index\"],null,50],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.a.i\"],null,49],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.a.ii\"],null,48],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.a.iii\"],null,47],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.a.alias-i\"],null,46],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.b\"],null,45],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.c\"],null,44],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"two\"],null,43],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"three\"],null,42],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"application\"],null,41],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"index\"],null,40],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one\"],null,39],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.index\"],null,38],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.alias-a\"],null,37],[\"text\",\"\\n            \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.alias-a.index\"],null,36],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.alias-a.i\"],null,35],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.alias-a.ii\"],null,34],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.alias-a.iii\"],null,33],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.alias-a.alias-i\"],null,32],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.b\"],null,31],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"one.c\"],null,30],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"two\"],null,29],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"three\"],null,28],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"application\"],null,27],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"index\"],null,26],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one\"],null,25],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.index\"],null,24],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.alias-a\"],null,23],[\"text\",\"\\n            \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.alias-a.index\"],null,22],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.alias-a.i\"],null,21],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.alias-a.ii\"],null,20],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.alias-a.iii\"],null,19],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.alias-a.alias-i\"],null,18],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.b\"],null,17],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"alias-one.c\"],null,16],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"two\"],null,15],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"three\"],null,14],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"application\"],null,13],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"index\"],null,12],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"not-one\"],null,11],[\"text\",\"\\n        \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"not-one.index\"],null,10],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"not-one.a\"],null,9],[\"text\",\"\\n            \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"not-one.a.index\"],null,8],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"not-one.a.i\"],null,7],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"not-one.a.ii\"],null,6],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"not-one.a.iii\"],null,5],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"not-one.a.alias-i\"],null,4],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"not-one.b\"],null,3],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"not-one.c\"],null,2],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"two\"],null,1],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"three\"],null,0],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"hr\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"application\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"three\"]],\"locals\":[]},{\"statements\":[[\"text\",\"two\"]],\"locals\":[]},{\"statements\":[[\"text\",\"not-one.c\"]],\"locals\":[]},{\"statements\":[[\"text\",\"not-one.b\"]],\"locals\":[]},{\"statements\":[[\"text\",\"not-one.a.alias-i\"]],\"locals\":[]},{\"statements\":[[\"text\",\"not-one.a.iii\"]],\"locals\":[]},{\"statements\":[[\"text\",\"not-one.a.ii\"]],\"locals\":[]},{\"statements\":[[\"text\",\"not-one.a.i\"]],\"locals\":[]},{\"statements\":[[\"text\",\"not-one.a.index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"not-one.a\"]],\"locals\":[]},{\"statements\":[[\"text\",\"not-one.index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"not-one\"]],\"locals\":[]},{\"statements\":[[\"text\",\"index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"application\"]],\"locals\":[]},{\"statements\":[[\"text\",\"three\"]],\"locals\":[]},{\"statements\":[[\"text\",\"two\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.c\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.b\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.alias-a.alias-i\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.alias-a.iii\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.alias-a.ii\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.alias-a.i\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.alias-a.index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.alias-a\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one\"]],\"locals\":[]},{\"statements\":[[\"text\",\"index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"application\"]],\"locals\":[]},{\"statements\":[[\"text\",\"three\"]],\"locals\":[]},{\"statements\":[[\"text\",\"two\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.c\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.b\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.alias-a.alias-i\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.alias-a.iii\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.alias-a.ii\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.alias-a.i\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.alias-a.index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.alias-a\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one\"]],\"locals\":[]},{\"statements\":[[\"text\",\"index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"application\"]],\"locals\":[]},{\"statements\":[[\"text\",\"three\"]],\"locals\":[]},{\"statements\":[[\"text\",\"two\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.c\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.b\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.a.alias-i\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.a.iii\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.a.ii\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.a.i\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.a.index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.a\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one.index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"alias-one\"]],\"locals\":[]},{\"statements\":[[\"text\",\"index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"application\"]],\"locals\":[]},{\"statements\":[[\"text\",\"three\"]],\"locals\":[]},{\"statements\":[[\"text\",\"two\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.c\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.b\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.a.alias-i\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.a.iii\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.a.ii\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.a.i\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.a.index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.a\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one.index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"one\"]],\"locals\":[]},{\"statements\":[[\"text\",\"index\"]],\"locals\":[]},{\"statements\":[[\"text\",\"application\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"index\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/index.hbs" } });
});
define("dummy/templates/one", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"one\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"rel-link-to\"],[\"\"],[[\"base\"],[[\"get\",[\"contextRoute\"]]]],6],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"rel-link-to\"],[\"a\"],[[\"base\"],[[\"get\",[\"contextRoute\"]]]],5],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"rel-link-to\"],[\"b\"],[[\"base\"],[[\"get\",[\"contextRoute\"]]]],4],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"rel-link-to\"],[\"c\"],[[\"base\"],[[\"get\",[\"contextRoute\"]]]],3],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"rel-link-to\"],[\"../one\"],[[\"base\"],[[\"get\",[\"contextRoute\"]]]],2],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"rel-link-to\"],[\"../two\"],[[\"base\"],[[\"get\",[\"contextRoute\"]]]],1],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"rel-link-to\"],[\"../three\"],[[\"base\"],[[\"get\",[\"contextRoute\"]]]],0],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"../three\"]],\"locals\":[]},{\"statements\":[[\"text\",\"../two\"]],\"locals\":[]},{\"statements\":[[\"text\",\"../one\"]],\"locals\":[]},{\"statements\":[[\"text\",\"c\"]],\"locals\":[]},{\"statements\":[[\"text\",\"b\"]],\"locals\":[]},{\"statements\":[[\"text\",\"a\"]],\"locals\":[]},{\"statements\":[[\"text\",\"''\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/one.hbs" } });
});
define("dummy/templates/one/a", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"one.a\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/one/a.hbs" } });
});
define("dummy/templates/one/a/i", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"one.a.i\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/one/a/i.hbs" } });
});
define("dummy/templates/one/a/i/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"one.a.i\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/one/a/i/index.hbs" } });
});
define("dummy/templates/one/a/ii", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"one.a.ii\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/one/a/ii.hbs" } });
});
define("dummy/templates/one/a/iii", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"one.a.iii\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/one/a/iii.hbs" } });
});
define("dummy/templates/one/a/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"one.a.index\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/one/a/index.hbs" } });
});
define("dummy/templates/one/alias-a", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"one.alias-a\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/one/alias-a.hbs" } });
});
define("dummy/templates/one/b", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"one.b\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/one/b.hbs" } });
});
define("dummy/templates/one/c", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"one.c\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/one/c.hbs" } });
});
define("dummy/templates/one/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"one.index\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/one/index.hbs" } });
});
define("dummy/templates/three", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"three\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/three.hbs" } });
});
define("dummy/templates/two", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"dl\",[]],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"originalRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"text\",\"two\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dt\",[]],[\"flush-element\"],[\"text\",\"contextRoute\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"dd\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"contextRoute\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/two.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-route-alias","version":"0.1.5"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
