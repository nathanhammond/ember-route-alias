"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment', 'ember-route-alias/mixins/route-alias-resolver'], function (exports, Ember, Resolver, loadInitializers, config, RouteAliasResolver) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default'].extend(RouteAliasResolver['default'])
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('dummy/components/rel-link-to', ['exports', 'ember-route-alias/components/rel-link-to'], function (exports, rel_link_to) {

	'use strict';



	exports['default'] = rel_link_to['default'];

});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/ember-route-alias/tests/modules/ember-route-alias/components/rel-link-to.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-route-alias/components');
  QUnit.test('modules/ember-route-alias/components/rel-link-to.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/ember-route-alias/components/rel-link-to.js should pass jshint.');
  });

});
define('dummy/ember-route-alias/tests/modules/ember-route-alias/initializers/route-alias.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-route-alias/initializers');
  QUnit.test('modules/ember-route-alias/initializers/route-alias.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/ember-route-alias/initializers/route-alias.js should pass jshint.');
  });

});
define('dummy/ember-route-alias/tests/modules/ember-route-alias/mixins/route-alias-resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-route-alias/mixins');
  QUnit.test('modules/ember-route-alias/mixins/route-alias-resolver.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/ember-route-alias/mixins/route-alias-resolver.js should pass jshint.');
  });

});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  ;

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/initializers/route-alias', ['exports', 'ember-route-alias/initializers/route-alias'], function (exports, route_alias) {

	'use strict';



	exports['default'] = route_alias['default'];
	exports.initialize = route_alias.initialize;

});
define('dummy/mixins/route-alias-resolver', ['exports', 'ember-route-alias/mixins/route-alias-resolver'], function (exports, route_alias_resolver) {

	'use strict';



	exports['default'] = route_alias_resolver['default'];

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
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
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 6
            },
            "end": {
              "line": 4,
              "column": 43
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("application");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 10
            },
            "end": {
              "line": 6,
              "column": 35
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 10
            },
            "end": {
              "line": 7,
              "column": 31
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 14
            },
            "end": {
              "line": 9,
              "column": 47
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child4 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 14
            },
            "end": {
              "line": 10,
              "column": 39
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.a");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child5 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 18
            },
            "end": {
              "line": 12,
              "column": 55
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.a.index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child6 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 18
            },
            "end": {
              "line": 13,
              "column": 47
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.a.i");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child7 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 18
            },
            "end": {
              "line": 14,
              "column": 49
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.a.ii");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child8 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 18
            },
            "end": {
              "line": 15,
              "column": 51
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.a.iii");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child9 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 18
            },
            "end": {
              "line": 16,
              "column": 59
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.a.alias-i");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child10 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 14
            },
            "end": {
              "line": 19,
              "column": 39
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.b");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child11 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 20,
              "column": 14
            },
            "end": {
              "line": 20,
              "column": 39
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.c");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child12 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 10
            },
            "end": {
              "line": 23,
              "column": 31
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("two");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child13 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 10
            },
            "end": {
              "line": 24,
              "column": 35
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("three");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child14 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 6
            },
            "end": {
              "line": 30,
              "column": 43
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("application");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child15 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 10
            },
            "end": {
              "line": 32,
              "column": 35
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child16 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 33,
              "column": 10
            },
            "end": {
              "line": 33,
              "column": 43
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child17 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 35,
              "column": 14
            },
            "end": {
              "line": 35,
              "column": 59
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child18 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 36,
              "column": 14
            },
            "end": {
              "line": 36,
              "column": 51
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.a");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child19 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 38,
              "column": 18
            },
            "end": {
              "line": 38,
              "column": 67
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.a.index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child20 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 39,
              "column": 18
            },
            "end": {
              "line": 39,
              "column": 59
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.a.i");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child21 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 40,
              "column": 18
            },
            "end": {
              "line": 40,
              "column": 61
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.a.ii");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child22 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 41,
              "column": 18
            },
            "end": {
              "line": 41,
              "column": 63
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.a.iii");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child23 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 42,
              "column": 18
            },
            "end": {
              "line": 42,
              "column": 71
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.a.alias-i");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child24 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 45,
              "column": 14
            },
            "end": {
              "line": 45,
              "column": 51
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.b");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child25 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 46,
              "column": 14
            },
            "end": {
              "line": 46,
              "column": 51
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.c");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child26 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 49,
              "column": 10
            },
            "end": {
              "line": 49,
              "column": 31
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("two");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child27 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 50,
              "column": 10
            },
            "end": {
              "line": 50,
              "column": 35
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("three");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child28 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 56,
              "column": 6
            },
            "end": {
              "line": 56,
              "column": 43
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("application");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child29 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 58,
              "column": 10
            },
            "end": {
              "line": 58,
              "column": 35
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child30 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 59,
              "column": 10
            },
            "end": {
              "line": 59,
              "column": 31
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child31 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 61,
              "column": 14
            },
            "end": {
              "line": 61,
              "column": 47
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child32 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 62,
              "column": 14
            },
            "end": {
              "line": 62,
              "column": 51
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.alias-a");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child33 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 64,
              "column": 18
            },
            "end": {
              "line": 64,
              "column": 67
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.alias-a.index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child34 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 65,
              "column": 18
            },
            "end": {
              "line": 65,
              "column": 59
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.alias-a.i");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child35 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 66,
              "column": 18
            },
            "end": {
              "line": 66,
              "column": 61
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.alias-a.ii");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child36 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 67,
              "column": 18
            },
            "end": {
              "line": 67,
              "column": 63
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.alias-a.iii");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child37 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 68,
              "column": 18
            },
            "end": {
              "line": 68,
              "column": 71
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.alias-a.alias-i");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child38 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 71,
              "column": 14
            },
            "end": {
              "line": 71,
              "column": 39
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.b");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child39 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 72,
              "column": 14
            },
            "end": {
              "line": 72,
              "column": 39
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("one.c");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child40 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 75,
              "column": 10
            },
            "end": {
              "line": 75,
              "column": 31
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("two");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child41 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 76,
              "column": 10
            },
            "end": {
              "line": 76,
              "column": 35
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("three");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child42 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 82,
              "column": 6
            },
            "end": {
              "line": 82,
              "column": 43
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("application");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child43 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 84,
              "column": 10
            },
            "end": {
              "line": 84,
              "column": 35
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child44 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 85,
              "column": 10
            },
            "end": {
              "line": 85,
              "column": 43
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child45 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 87,
              "column": 14
            },
            "end": {
              "line": 87,
              "column": 59
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child46 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 88,
              "column": 14
            },
            "end": {
              "line": 88,
              "column": 63
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.alias-a");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child47 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 90,
              "column": 18
            },
            "end": {
              "line": 90,
              "column": 79
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.alias-a.index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child48 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 91,
              "column": 18
            },
            "end": {
              "line": 91,
              "column": 71
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.alias-a.i");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child49 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 92,
              "column": 18
            },
            "end": {
              "line": 92,
              "column": 73
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.alias-a.ii");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child50 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 93,
              "column": 18
            },
            "end": {
              "line": 93,
              "column": 75
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.alias-a.iii");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child51 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 94,
              "column": 18
            },
            "end": {
              "line": 94,
              "column": 83
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.alias-a.alias-i");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child52 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 97,
              "column": 14
            },
            "end": {
              "line": 97,
              "column": 51
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.b");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child53 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 98,
              "column": 14
            },
            "end": {
              "line": 98,
              "column": 51
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("alias-one.c");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child54 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 101,
              "column": 10
            },
            "end": {
              "line": 101,
              "column": 31
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("two");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child55 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 102,
              "column": 10
            },
            "end": {
              "line": 102,
              "column": 35
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("three");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child56 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 108,
              "column": 6
            },
            "end": {
              "line": 108,
              "column": 43
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("application");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child57 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 110,
              "column": 10
            },
            "end": {
              "line": 110,
              "column": 35
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child58 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 111,
              "column": 10
            },
            "end": {
              "line": 111,
              "column": 39
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("not-one");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child59 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 113,
              "column": 14
            },
            "end": {
              "line": 113,
              "column": 55
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("not-one.index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child60 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 114,
              "column": 14
            },
            "end": {
              "line": 114,
              "column": 47
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("not-one.a");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child61 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 116,
              "column": 18
            },
            "end": {
              "line": 116,
              "column": 63
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("not-one.a.index");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child62 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 117,
              "column": 18
            },
            "end": {
              "line": 117,
              "column": 55
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("not-one.a.i");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child63 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 118,
              "column": 18
            },
            "end": {
              "line": 118,
              "column": 57
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("not-one.a.ii");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child64 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 119,
              "column": 18
            },
            "end": {
              "line": 119,
              "column": 59
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("not-one.a.iii");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child65 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 120,
              "column": 18
            },
            "end": {
              "line": 120,
              "column": 67
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("not-one.a.alias-i");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child66 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 123,
              "column": 14
            },
            "end": {
              "line": 123,
              "column": 47
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("not-one.b");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child67 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 124,
              "column": 14
            },
            "end": {
              "line": 124,
              "column": 47
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("not-one.c");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child68 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 127,
              "column": 10
            },
            "end": {
              "line": 127,
              "column": 31
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("two");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child69 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 128,
              "column": 10
            },
            "end": {
              "line": 128,
              "column": 35
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("three");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 143,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Ember Route Alias");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("application");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1]);
        var element1 = dom.childAt(element0, [2]);
        var element2 = dom.childAt(element1, [3]);
        var element3 = dom.childAt(element2, [2]);
        var element4 = dom.childAt(element3, [3]);
        var element5 = dom.childAt(element4, [2]);
        var element6 = dom.childAt(fragment, [4, 1]);
        var element7 = dom.childAt(element6, [2]);
        var element8 = dom.childAt(element7, [3]);
        var element9 = dom.childAt(element8, [2]);
        var element10 = dom.childAt(element9, [3]);
        var element11 = dom.childAt(element10, [2]);
        var element12 = dom.childAt(fragment, [6, 1]);
        var element13 = dom.childAt(element12, [2]);
        var element14 = dom.childAt(element13, [3]);
        var element15 = dom.childAt(element14, [2]);
        var element16 = dom.childAt(element15, [3]);
        var element17 = dom.childAt(element16, [2]);
        var element18 = dom.childAt(fragment, [8, 1]);
        var element19 = dom.childAt(element18, [2]);
        var element20 = dom.childAt(element19, [3]);
        var element21 = dom.childAt(element20, [2]);
        var element22 = dom.childAt(element21, [3]);
        var element23 = dom.childAt(element22, [2]);
        var element24 = dom.childAt(fragment, [10, 1]);
        var element25 = dom.childAt(element24, [2]);
        var element26 = dom.childAt(element25, [3]);
        var element27 = dom.childAt(element26, [2]);
        var element28 = dom.childAt(element27, [3]);
        var element29 = dom.childAt(element28, [2]);
        var morphs = new Array(72);
        morphs[0] = dom.createMorphAt(element0,0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
        morphs[2] = dom.createMorphAt(element2,0,0);
        morphs[3] = dom.createMorphAt(dom.childAt(element3, [1]),0,0);
        morphs[4] = dom.createMorphAt(element4,0,0);
        morphs[5] = dom.createMorphAt(dom.childAt(element5, [1]),0,0);
        morphs[6] = dom.createMorphAt(dom.childAt(element5, [3]),0,0);
        morphs[7] = dom.createMorphAt(dom.childAt(element5, [5]),0,0);
        morphs[8] = dom.createMorphAt(dom.childAt(element5, [7]),0,0);
        morphs[9] = dom.createMorphAt(dom.childAt(element5, [9]),0,0);
        morphs[10] = dom.createMorphAt(dom.childAt(element3, [5]),0,0);
        morphs[11] = dom.createMorphAt(dom.childAt(element3, [7]),0,0);
        morphs[12] = dom.createMorphAt(dom.childAt(element1, [5]),0,0);
        morphs[13] = dom.createMorphAt(dom.childAt(element1, [7]),0,0);
        morphs[14] = dom.createMorphAt(element6,0,0);
        morphs[15] = dom.createMorphAt(dom.childAt(element7, [1]),0,0);
        morphs[16] = dom.createMorphAt(element8,0,0);
        morphs[17] = dom.createMorphAt(dom.childAt(element9, [1]),0,0);
        morphs[18] = dom.createMorphAt(element10,0,0);
        morphs[19] = dom.createMorphAt(dom.childAt(element11, [1]),0,0);
        morphs[20] = dom.createMorphAt(dom.childAt(element11, [3]),0,0);
        morphs[21] = dom.createMorphAt(dom.childAt(element11, [5]),0,0);
        morphs[22] = dom.createMorphAt(dom.childAt(element11, [7]),0,0);
        morphs[23] = dom.createMorphAt(dom.childAt(element11, [9]),0,0);
        morphs[24] = dom.createMorphAt(dom.childAt(element9, [5]),0,0);
        morphs[25] = dom.createMorphAt(dom.childAt(element9, [7]),0,0);
        morphs[26] = dom.createMorphAt(dom.childAt(element7, [5]),0,0);
        morphs[27] = dom.createMorphAt(dom.childAt(element7, [7]),0,0);
        morphs[28] = dom.createMorphAt(element12,0,0);
        morphs[29] = dom.createMorphAt(dom.childAt(element13, [1]),0,0);
        morphs[30] = dom.createMorphAt(element14,0,0);
        morphs[31] = dom.createMorphAt(dom.childAt(element15, [1]),0,0);
        morphs[32] = dom.createMorphAt(element16,0,0);
        morphs[33] = dom.createMorphAt(dom.childAt(element17, [1]),0,0);
        morphs[34] = dom.createMorphAt(dom.childAt(element17, [3]),0,0);
        morphs[35] = dom.createMorphAt(dom.childAt(element17, [5]),0,0);
        morphs[36] = dom.createMorphAt(dom.childAt(element17, [7]),0,0);
        morphs[37] = dom.createMorphAt(dom.childAt(element17, [9]),0,0);
        morphs[38] = dom.createMorphAt(dom.childAt(element15, [5]),0,0);
        morphs[39] = dom.createMorphAt(dom.childAt(element15, [7]),0,0);
        morphs[40] = dom.createMorphAt(dom.childAt(element13, [5]),0,0);
        morphs[41] = dom.createMorphAt(dom.childAt(element13, [7]),0,0);
        morphs[42] = dom.createMorphAt(element18,0,0);
        morphs[43] = dom.createMorphAt(dom.childAt(element19, [1]),0,0);
        morphs[44] = dom.createMorphAt(element20,0,0);
        morphs[45] = dom.createMorphAt(dom.childAt(element21, [1]),0,0);
        morphs[46] = dom.createMorphAt(element22,0,0);
        morphs[47] = dom.createMorphAt(dom.childAt(element23, [1]),0,0);
        morphs[48] = dom.createMorphAt(dom.childAt(element23, [3]),0,0);
        morphs[49] = dom.createMorphAt(dom.childAt(element23, [5]),0,0);
        morphs[50] = dom.createMorphAt(dom.childAt(element23, [7]),0,0);
        morphs[51] = dom.createMorphAt(dom.childAt(element23, [9]),0,0);
        morphs[52] = dom.createMorphAt(dom.childAt(element21, [5]),0,0);
        morphs[53] = dom.createMorphAt(dom.childAt(element21, [7]),0,0);
        morphs[54] = dom.createMorphAt(dom.childAt(element19, [5]),0,0);
        morphs[55] = dom.createMorphAt(dom.childAt(element19, [7]),0,0);
        morphs[56] = dom.createMorphAt(element24,0,0);
        morphs[57] = dom.createMorphAt(dom.childAt(element25, [1]),0,0);
        morphs[58] = dom.createMorphAt(element26,0,0);
        morphs[59] = dom.createMorphAt(dom.childAt(element27, [1]),0,0);
        morphs[60] = dom.createMorphAt(element28,0,0);
        morphs[61] = dom.createMorphAt(dom.childAt(element29, [1]),0,0);
        morphs[62] = dom.createMorphAt(dom.childAt(element29, [3]),0,0);
        morphs[63] = dom.createMorphAt(dom.childAt(element29, [5]),0,0);
        morphs[64] = dom.createMorphAt(dom.childAt(element29, [7]),0,0);
        morphs[65] = dom.createMorphAt(dom.childAt(element29, [9]),0,0);
        morphs[66] = dom.createMorphAt(dom.childAt(element27, [5]),0,0);
        morphs[67] = dom.createMorphAt(dom.childAt(element27, [7]),0,0);
        morphs[68] = dom.createMorphAt(dom.childAt(element25, [5]),0,0);
        morphs[69] = dom.createMorphAt(dom.childAt(element25, [7]),0,0);
        morphs[70] = dom.createMorphAt(dom.childAt(fragment, [14, 7]),0,0);
        morphs[71] = dom.createMorphAt(dom.childAt(fragment, [16]),0,0);
        return morphs;
      },
      statements: [
        ["block","link-to",["application"],[],0,null,["loc",[null,[4,6],[4,55]]]],
        ["block","link-to",["index"],[],1,null,["loc",[null,[6,10],[6,47]]]],
        ["block","link-to",["one"],[],2,null,["loc",[null,[7,10],[7,43]]]],
        ["block","link-to",["one.index"],[],3,null,["loc",[null,[9,14],[9,59]]]],
        ["block","link-to",["one.a"],[],4,null,["loc",[null,[10,14],[10,51]]]],
        ["block","link-to",["one.a.index"],[],5,null,["loc",[null,[12,18],[12,67]]]],
        ["block","link-to",["one.a.i"],[],6,null,["loc",[null,[13,18],[13,59]]]],
        ["block","link-to",["one.a.ii"],[],7,null,["loc",[null,[14,18],[14,61]]]],
        ["block","link-to",["one.a.iii"],[],8,null,["loc",[null,[15,18],[15,63]]]],
        ["block","link-to",["one.a.alias-i"],[],9,null,["loc",[null,[16,18],[16,71]]]],
        ["block","link-to",["one.b"],[],10,null,["loc",[null,[19,14],[19,51]]]],
        ["block","link-to",["one.c"],[],11,null,["loc",[null,[20,14],[20,51]]]],
        ["block","link-to",["two"],[],12,null,["loc",[null,[23,10],[23,43]]]],
        ["block","link-to",["three"],[],13,null,["loc",[null,[24,10],[24,47]]]],
        ["block","link-to",["application"],[],14,null,["loc",[null,[30,6],[30,55]]]],
        ["block","link-to",["index"],[],15,null,["loc",[null,[32,10],[32,47]]]],
        ["block","link-to",["alias-one"],[],16,null,["loc",[null,[33,10],[33,55]]]],
        ["block","link-to",["alias-one.index"],[],17,null,["loc",[null,[35,14],[35,71]]]],
        ["block","link-to",["alias-one.a"],[],18,null,["loc",[null,[36,14],[36,63]]]],
        ["block","link-to",["alias-one.a.index"],[],19,null,["loc",[null,[38,18],[38,79]]]],
        ["block","link-to",["alias-one.a.i"],[],20,null,["loc",[null,[39,18],[39,71]]]],
        ["block","link-to",["alias-one.a.ii"],[],21,null,["loc",[null,[40,18],[40,73]]]],
        ["block","link-to",["alias-one.a.iii"],[],22,null,["loc",[null,[41,18],[41,75]]]],
        ["block","link-to",["alias-one.a.alias-i"],[],23,null,["loc",[null,[42,18],[42,83]]]],
        ["block","link-to",["alias-one.b"],[],24,null,["loc",[null,[45,14],[45,63]]]],
        ["block","link-to",["alias-one.c"],[],25,null,["loc",[null,[46,14],[46,63]]]],
        ["block","link-to",["two"],[],26,null,["loc",[null,[49,10],[49,43]]]],
        ["block","link-to",["three"],[],27,null,["loc",[null,[50,10],[50,47]]]],
        ["block","link-to",["application"],[],28,null,["loc",[null,[56,6],[56,55]]]],
        ["block","link-to",["index"],[],29,null,["loc",[null,[58,10],[58,47]]]],
        ["block","link-to",["one"],[],30,null,["loc",[null,[59,10],[59,43]]]],
        ["block","link-to",["one.index"],[],31,null,["loc",[null,[61,14],[61,59]]]],
        ["block","link-to",["one.alias-a"],[],32,null,["loc",[null,[62,14],[62,63]]]],
        ["block","link-to",["one.alias-a.index"],[],33,null,["loc",[null,[64,18],[64,79]]]],
        ["block","link-to",["one.alias-a.i"],[],34,null,["loc",[null,[65,18],[65,71]]]],
        ["block","link-to",["one.alias-a.ii"],[],35,null,["loc",[null,[66,18],[66,73]]]],
        ["block","link-to",["one.alias-a.iii"],[],36,null,["loc",[null,[67,18],[67,75]]]],
        ["block","link-to",["one.alias-a.alias-i"],[],37,null,["loc",[null,[68,18],[68,83]]]],
        ["block","link-to",["one.b"],[],38,null,["loc",[null,[71,14],[71,51]]]],
        ["block","link-to",["one.c"],[],39,null,["loc",[null,[72,14],[72,51]]]],
        ["block","link-to",["two"],[],40,null,["loc",[null,[75,10],[75,43]]]],
        ["block","link-to",["three"],[],41,null,["loc",[null,[76,10],[76,47]]]],
        ["block","link-to",["application"],[],42,null,["loc",[null,[82,6],[82,55]]]],
        ["block","link-to",["index"],[],43,null,["loc",[null,[84,10],[84,47]]]],
        ["block","link-to",["alias-one"],[],44,null,["loc",[null,[85,10],[85,55]]]],
        ["block","link-to",["alias-one.index"],[],45,null,["loc",[null,[87,14],[87,71]]]],
        ["block","link-to",["alias-one.alias-a"],[],46,null,["loc",[null,[88,14],[88,75]]]],
        ["block","link-to",["alias-one.alias-a.index"],[],47,null,["loc",[null,[90,18],[90,91]]]],
        ["block","link-to",["alias-one.alias-a.i"],[],48,null,["loc",[null,[91,18],[91,83]]]],
        ["block","link-to",["alias-one.alias-a.ii"],[],49,null,["loc",[null,[92,18],[92,85]]]],
        ["block","link-to",["alias-one.alias-a.iii"],[],50,null,["loc",[null,[93,18],[93,87]]]],
        ["block","link-to",["alias-one.alias-a.alias-i"],[],51,null,["loc",[null,[94,18],[94,95]]]],
        ["block","link-to",["alias-one.b"],[],52,null,["loc",[null,[97,14],[97,63]]]],
        ["block","link-to",["alias-one.c"],[],53,null,["loc",[null,[98,14],[98,63]]]],
        ["block","link-to",["two"],[],54,null,["loc",[null,[101,10],[101,43]]]],
        ["block","link-to",["three"],[],55,null,["loc",[null,[102,10],[102,47]]]],
        ["block","link-to",["application"],[],56,null,["loc",[null,[108,6],[108,55]]]],
        ["block","link-to",["index"],[],57,null,["loc",[null,[110,10],[110,47]]]],
        ["block","link-to",["not-one"],[],58,null,["loc",[null,[111,10],[111,51]]]],
        ["block","link-to",["not-one.index"],[],59,null,["loc",[null,[113,14],[113,67]]]],
        ["block","link-to",["not-one.a"],[],60,null,["loc",[null,[114,14],[114,59]]]],
        ["block","link-to",["not-one.a.index"],[],61,null,["loc",[null,[116,18],[116,75]]]],
        ["block","link-to",["not-one.a.i"],[],62,null,["loc",[null,[117,18],[117,67]]]],
        ["block","link-to",["not-one.a.ii"],[],63,null,["loc",[null,[118,18],[118,69]]]],
        ["block","link-to",["not-one.a.iii"],[],64,null,["loc",[null,[119,18],[119,71]]]],
        ["block","link-to",["not-one.a.alias-i"],[],65,null,["loc",[null,[120,18],[120,79]]]],
        ["block","link-to",["not-one.b"],[],66,null,["loc",[null,[123,14],[123,59]]]],
        ["block","link-to",["not-one.c"],[],67,null,["loc",[null,[124,14],[124,59]]]],
        ["block","link-to",["two"],[],68,null,["loc",[null,[127,10],[127,43]]]],
        ["block","link-to",["three"],[],69,null,["loc",[null,[128,10],[128,47]]]],
        ["content","contextRoute",["loc",[null,[139,6],[139,22]]]],
        ["content","outlet",["loc",[null,[142,5],[142,15]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10, child11, child12, child13, child14, child15, child16, child17, child18, child19, child20, child21, child22, child23, child24, child25, child26, child27, child28, child29, child30, child31, child32, child33, child34, child35, child36, child37, child38, child39, child40, child41, child42, child43, child44, child45, child46, child47, child48, child49, child50, child51, child52, child53, child54, child55, child56, child57, child58, child59, child60, child61, child62, child63, child64, child65, child66, child67, child68, child69]
    };
  }()));

});
define('dummy/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("index");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["content","outlet",["loc",[null,[8,5],[8,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/one/a/i/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/one/a/i/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("one.a.i");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["content","outlet",["loc",[null,[8,5],[8,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/one/a/i', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/one/a/i.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("one.a.i");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["content","outlet",["loc",[null,[8,5],[8,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/one/a/ii', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/one/a/ii.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("one.a.ii");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["content","outlet",["loc",[null,[8,5],[8,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/one/a/iii', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/one/a/iii.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("one.a.iii");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["content","outlet",["loc",[null,[8,5],[8,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/one/a/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/one/a/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("one.a.index");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["content","outlet",["loc",[null,[8,5],[8,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/one/a', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/one/a.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("one.a");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["content","outlet",["loc",[null,[8,5],[8,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/one/alias-a', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/one/alias-a.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("one.alias-a");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["content","outlet",["loc",[null,[8,5],[8,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/one/b', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/one/b.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("one.b");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["content","outlet",["loc",[null,[8,5],[8,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/one/c', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/one/c.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("one.c");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["content","outlet",["loc",[null,[8,5],[8,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/one/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/one/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("one.index");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["content","outlet",["loc",[null,[8,5],[8,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/one', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 6
            },
            "end": {
              "line": 9,
              "column": 45
            }
          },
          "moduleName": "dummy/templates/one.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("''");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 10
            },
            "end": {
              "line": 11,
              "column": 49
            }
          },
          "moduleName": "dummy/templates/one.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("a");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 10
            },
            "end": {
              "line": 12,
              "column": 49
            }
          },
          "moduleName": "dummy/templates/one.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("b");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 10
            },
            "end": {
              "line": 13,
              "column": 49
            }
          },
          "moduleName": "dummy/templates/one.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("c");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child4 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 6
            },
            "end": {
              "line": 16,
              "column": 55
            }
          },
          "moduleName": "dummy/templates/one.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("../one");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child5 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 6
            },
            "end": {
              "line": 17,
              "column": 55
            }
          },
          "moduleName": "dummy/templates/one.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("../two");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child6 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0-beta.4",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 6
            },
            "end": {
              "line": 18,
              "column": 59
            }
          },
          "moduleName": "dummy/templates/one.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("../three");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/one.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("one");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [2]);
        var morphs = new Array(9);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(element1,0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
        morphs[3] = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
        morphs[4] = dom.createMorphAt(dom.childAt(element2, [5]),0,0);
        morphs[5] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        morphs[6] = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
        morphs[7] = dom.createMorphAt(dom.childAt(element0, [7]),0,0);
        morphs[8] = dom.createMorphAt(dom.childAt(fragment, [4]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["block","rel-link-to",[""],["base",["subexpr","@mut",[["get","contextRoute",["loc",[null,[9,29],[9,41]]]]],[],[]]],0,null,["loc",[null,[9,6],[9,61]]]],
        ["block","rel-link-to",["a"],["base",["subexpr","@mut",[["get","contextRoute",["loc",[null,[11,34],[11,46]]]]],[],[]]],1,null,["loc",[null,[11,10],[11,65]]]],
        ["block","rel-link-to",["b"],["base",["subexpr","@mut",[["get","contextRoute",["loc",[null,[12,34],[12,46]]]]],[],[]]],2,null,["loc",[null,[12,10],[12,65]]]],
        ["block","rel-link-to",["c"],["base",["subexpr","@mut",[["get","contextRoute",["loc",[null,[13,34],[13,46]]]]],[],[]]],3,null,["loc",[null,[13,10],[13,65]]]],
        ["block","rel-link-to",["../one"],["base",["subexpr","@mut",[["get","contextRoute",["loc",[null,[16,35],[16,47]]]]],[],[]]],4,null,["loc",[null,[16,6],[16,71]]]],
        ["block","rel-link-to",["../two"],["base",["subexpr","@mut",[["get","contextRoute",["loc",[null,[17,35],[17,47]]]]],[],[]]],5,null,["loc",[null,[17,6],[17,71]]]],
        ["block","rel-link-to",["../three"],["base",["subexpr","@mut",[["get","contextRoute",["loc",[null,[18,37],[18,49]]]]],[],[]]],6,null,["loc",[null,[18,6],[18,75]]]],
        ["content","outlet",["loc",[null,[21,5],[21,15]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6]
    };
  }()));

});
define('dummy/templates/three', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/three.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("three");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["content","outlet",["loc",[null,[8,5],[8,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/two', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0-beta.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 21
          }
        },
        "moduleName": "dummy/templates/two.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("originalRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode("two");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("contextRoute");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 7]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]),0,0);
        return morphs;
      },
      statements: [
        ["content","contextRoute",["loc",[null,[5,6],[5,22]]]],
        ["content","outlet",["loc",[null,[8,5],[8,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/components/rel-link-to-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('rel-link-to', 'Unit | Component | rel link to', {
    unit: true
  });

  ember_qunit.test('Check _process lookups.', function (assert) {
    var subject = this.subject();

    assert.equal(subject._process('foo.bar', ''), 'foo.bar', 'Empty string lookup.');
    assert.equal(subject._process('foo.bar', './'), 'foo.bar', './ lookup.');
    assert.equal(subject._process('foo.bar', '../'), 'foo', '../ lookup.');
    assert.equal(subject._process('foo.bar', '../baz'), 'foo.baz', 'Sibling lookup.');
    assert.equal(subject._process('foo', 'baz'), 'foo.baz', 'Child lookup.');
  });

});
define('dummy/tests/unit/components/rel-link-to-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/components');
  QUnit.test('unit/components/rel-link-to-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/components/rel-link-to-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/initializers/route-alias-test', ['ember', 'dummy/initializers/route-alias', 'qunit'], function (Ember, RouteAliasInitializer, qunit) {

  'use strict';

  var application;
  var originals = {
    setupController: Ember['default'].Route.proto().setupController,
    route: Ember['default'].RouterDSL.prototype.route
  };

  qunit.module('Unit | Initializer | route alias', {
    beforeEach: function beforeEach() {
      Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        application.deferReadiness();
      });
    },
    afterEach: function afterEach() {
      Ember['default'].run(function () {
        Ember['default'].Route.proto().setupController = originals.setupController;
        delete Ember['default'].RouterDSL.prototype.alias;
        Ember['default'].RouterDSL.prototype.route = originals.route;
      });
    }
  });

  qunit.test('Initializer properly modifies/hooks all objects.', function (assert) {
    RouteAliasInitializer['default'].initialize(application);

    var replacements = {
      setupController: Ember['default'].Route.proto().setupController,
      route: Ember['default'].RouterDSL.prototype.route
    };

    assert.ok(application._routeAliasLookup, 'Ensure that the dictionary we use is present.');
    assert.notEqual(originals.setupController, replacements.setupController, 'Ensure that Route#setupController is replaced.');
    assert.notEqual(originals.route, replacements.route, 'RouterDSL#route has been replaced.');
    assert.ok(Ember['default'].RouterDSL.prototype.route, 'RouterDSL#alias exists.');
  });

  qunit.test('RouterDSL assertions work.', function (assert) {
    RouteAliasInitializer['default'].initialize(application);

    var DSL = new Ember['default'].RouterDSL();

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

  qunit.test('RouterDSL#route saving of scope works as expected.', function (assert) {
    RouteAliasInitializer['default'].initialize(application);
    var DSL = new Ember['default'].RouterDSL();
    var stub = function stub() {};

    DSL.route('index', { path: '/' }, stub);
    assert.ok(DSL.handlers.index, 'Sets up a lookup for the original arguments passed in for each route.');
    assert.equal(stub, DSL.handlers.index[1], 'The saved callback is the original reference.');
  });

  qunit.test('RouterDSL#route invokes the original prototype.', function (assert) {
    var spycount = 0;
    Ember['default'].RouterDSL.prototype.route = function () {
      spycount++;
      originals.route.apply(this, arguments);
    };

    RouteAliasInitializer['default'].initialize(application);
    var DSL = new Ember['default'].RouterDSL();

    DSL.route('index', { path: '/' });
    assert.equal(spycount, 1, 'Invoking route hits the original prototype.');
  });

  qunit.test('RouterDSL#alias creates the lookup.', function (assert) {
    RouteAliasInitializer['default'].initialize(application);

    var DSL = new Ember['default'].RouterDSL();
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
define('dummy/tests/unit/initializers/route-alias-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/initializers');
  QUnit.test('unit/initializers/route-alias-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/initializers/route-alias-test.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/mixins/route-alias-resolver-test', ['ember/resolver', 'dummy/mixins/route-alias-resolver', 'qunit'], function (Resolver, RouteAliasResolver, qunit) {

  'use strict';

  // import Ember from 'ember';
  qunit.module('Unit | Mixin | route alias resolver');

  qunit.test('Adds a module name lookup pattern.', function (assert) {
    var base = Resolver['default'].create();
    var baseLength = base.get('moduleNameLookupPatterns').length;

    var subject = Resolver['default'].extend(RouteAliasResolver['default']).create();
    var subjectLength = subject.get('moduleNameLookupPatterns').length;

    assert.equal(baseLength + 1, subjectLength, 'Successfully added a module name lookup pattern.');
  });

  qunit.test('The module name lookup works.', function (assert) {
    var result = undefined;
    var subject = Resolver['default'].extend(RouteAliasResolver['default']).create();

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
define('dummy/tests/unit/mixins/route-alias-resolver-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/mixins');
  QUnit.test('unit/mixins/route-alias-resolver-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/mixins/route-alias-resolver-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"ember-route-alias","version":"0.1.0+8256d67f"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map