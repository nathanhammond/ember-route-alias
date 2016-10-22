'use strict';

define('dummy/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _dummyTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    // use defaults, but you can override
    var attributes = _ember['default'].assign({}, _dummyConfigEnvironment['default'].APP, attrs);

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('dummy/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('dummy/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('dummy/tests/unit/initializers/route-alias-test', ['exports', 'ember', 'dummy/initializers/route-alias', 'qunit'], function (exports, _ember, _dummyInitializersRouteAlias, _qunit) {

  var application, DSL;
  var originals = {
    route: _ember['default'].RouterDSL.prototype.route
  };

  (0, _qunit.module)('Unit | Initializer | route alias', {
    beforeEach: function beforeEach() {
      _ember['default'].run(function () {
        application = _ember['default'].Application.create();
        application.deferReadiness();
        _dummyInitializersRouteAlias['default'].initialize(application);
        DSL = new _ember['default'].RouterDSL(null, {});
      });
    }
  });

  (0, _qunit.test)('Initializer properly modifies/hooks all objects.', function (assert) {
    var replacements = {
      route: _ember['default'].RouterDSL.prototype.route
    };

    assert.ok(application._routeAliasLookup, 'Ensure that the dictionary we use is present.');
    assert.notEqual(originals.route, replacements.route, 'RouterDSL#route has been replaced.');
    assert.ok(_ember['default'].RouterDSL.prototype.route, 'RouterDSL#alias exists.');
  });

  (0, _qunit.test)('Route#setupController sets the contextRoute on the controller', function (assert) {
    var route = _ember['default'].Route.create({ routeName: 'testy-mctesterton' });
    var controller = _ember['default'].Controller.create({});

    assert.notOk(controller.get('contextRoute'), 'contextRoute is empty to start');

    route.setupController(controller);

    assert.equal(controller.get('contextRoute'), 'testy-mctesterton', 'contextRoute is set after setup');
  });

  (0, _qunit.test)('RouterDSL assertions work.', function (assert) {
    assert.throws(function () {
      DSL.alias('asdf', '/asdf', 'target');
    }, /You must create a route prior to creating an alias\./, 'Throws an error when you create an alias prior to generating any routes.');

    assert.throws(function () {
      DSL.route('period.separated');
    }, /You may not include a "\." in your route name\./, 'Throws an error when you attempt to create a route with a period in it.');

    DSL.route('index', { path: '/' });

    assert.throws(function () {
      DSL.alias('asdf', '/asdf', 'elsewhere');
    }, /The alias target must exist before attempting to alias it\./, 'Throws an error when you target an alias at a non-existent route.');
  });

  (0, _qunit.test)('RouterDSL#route saving of scope works as expected.', function (assert) {
    var stub = function stub() {};

    DSL.route('index', { path: '/' }, stub);
    assert.ok(DSL.handlers.index, 'Sets up a lookup for the original arguments passed in for each route.');
    assert.equal(stub, DSL.handlers.index[1], 'The saved callback is the original reference.');
  });

  (0, _qunit.test)('RouterDSL#alias creates the lookup.', function (assert) {
    assert.notOk(DSL.intercepting, 'Not set as intercepting prior to an alias call.');

    DSL.route('index', { path: '/' });

    assert.equal(DSL.intercepting.length, 0, 'Not set as intercepting prior to an alias call.');

    DSL.alias('asdf', '/asdf', 'index');

    assert.equal(DSL.intercepting.length, 1, 'Sets up intercepting to identify state.');
    assert.equal(application._routeAliasLookup['asdf'], 'index', 'Lookup entry is created for the alias route.');

    DSL.route('one', function () {
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
});
define('dummy/tests/unit/initializers/route-alias-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/initializers/route-alias-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/initializers/route-alias-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/mixins/rel-link-to-test', ['exports', 'ember', 'dummy/mixins/rel-link-to', 'qunit'], function (exports, _ember, _dummyMixinsRelLinkTo, _qunit) {

  (0, _qunit.module)('Unit | Mixin | rel link to');

  (0, _qunit.test)('Check _process lookups.', function (assert) {
    var RelLinkToObject = _ember['default'].Object.extend(_dummyMixinsRelLinkTo['default']);
    var subject = RelLinkToObject.create();

    assert.equal(subject._process('foo.bar', ''), 'foo.bar', 'Empty string lookup.');
    assert.equal(subject._process('foo.bar', './'), 'foo.bar', './ lookup.');
    assert.equal(subject._process('foo.bar', '../'), 'foo', '../ lookup.');
    assert.equal(subject._process('foo.bar', '../baz'), 'foo.baz', 'Sibling lookup.');
    assert.equal(subject._process('foo', 'baz'), 'foo.baz', 'Child lookup.');
  });
});
define('dummy/tests/unit/mixins/rel-link-to-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/mixins/rel-link-to-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/rel-link-to-test.js should pass jshint.');
  });
});
define('dummy/tests/unit/mixins/route-alias-resolver-test', ['exports', 'ember-resolver', 'dummy/mixins/route-alias-resolver', 'qunit'], function (exports, _emberResolver, _dummyMixinsRouteAliasResolver, _qunit) {

  (0, _qunit.module)('Unit | Mixin | route alias resolver');

  (0, _qunit.test)('Adds a module name lookup pattern.', function (assert) {
    var base = _emberResolver['default'].create();
    var baseLength = base.get('moduleNameLookupPatterns').length;

    var subject = _emberResolver['default'].extend(_dummyMixinsRouteAliasResolver['default']).create();
    var subjectLength = subject.get('moduleNameLookupPatterns').length;

    assert.equal(baseLength + 1, subjectLength, 'Successfully added a module name lookup pattern.');
  });

  (0, _qunit.test)('The module name lookup works.', function (assert) {
    var result = undefined;
    var subject = _emberResolver['default'].extend(_dummyMixinsRouteAliasResolver['default']).create();

    assert.equal(subject.aliasedModuleName(), false, 'Returns falsy with no namespace.');

    subject.namespace = {};

    assert.equal(subject.aliasedModuleName(), false, 'Returns falsy with no lookup.');

    subject.namespace._routeAliasLookup = {
      'alias-one': 'one',
      'alias-one/a': 'one/a',
      'alias-one/alias-a': 'alias-one/a',
      'not-one': 'alias-one'
    };

    result = subject.aliasedModuleName({
      prefix: 'ember-route-alias',
      type: 'something-else',
      fullNameWithoutType: 'something-else'
    });

    assert.equal(result, false, 'Returns falsy when the lookup is for the wrong type.');

    result = subject.aliasedModuleName({
      prefix: 'ember-route-alias',
      type: 'template',
      fullNameWithoutType: 'something-else'
    });

    assert.equal(result, false, 'Returns falsy when not found in the lookup.');

    result = subject.aliasedModuleName({
      prefix: 'ember-route-alias',
      type: 'template',
      fullNameWithoutType: 'alias-one'
    });

    assert.equal(result, 'ember-route-alias/templates/one', 'Succeeds at simple lookups.');

    result = subject.aliasedModuleName({
      prefix: 'ember-route-alias',
      type: 'template',
      fullNameWithoutType: 'not-one'
    });

    assert.equal(result, 'ember-route-alias/templates/one', 'Succeeds at "recursive" lookups, alias to alias.');

    result = subject.aliasedModuleName({
      prefix: 'ember-route-alias',
      type: 'template',
      fullNameWithoutType: 'alias-one/alias-a'
    });

    assert.equal(result, 'ember-route-alias/templates/one/a', 'Succeeds at "recursive" lookups.');
  });
});
// import Ember from 'ember';
define('dummy/tests/unit/mixins/route-alias-resolver-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/mixins/route-alias-resolver-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/mixins/route-alias-resolver-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
