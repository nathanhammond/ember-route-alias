import Ember from 'ember';

// The addon doesn't support more than one application at a time, so we store the current one
// and asserts is destroyed before replacing with another one
let currentApplication;
// Single lookup table is enough for the same reason
let lookup;

/*
Reopen `Ember.Route` to attach a new property to the controller to make it
available in all route templates. We only need to do this once as it is a global
change that is not instance specific.
*/
Ember.Route.reopen({
  setupController(controller) {
    this._super.apply(this, arguments);
    controller.set('contextRoute', this.routeName);
  }
});

// Sets up our magic alias function.
Ember.RouterDSL.prototype.alias = function(aliasRoute, aliasPath, aliasTarget) {
  Ember.assert('You must create a route prior to creating an alias.', this.handlers || this.intercepting);
  Ember.assert('The alias target must exist before attempting to alias it.', this.handlers[aliasTarget]);

  // Grab a reference to the arguments passed in for the original route.
  let [options, callback] = this.handlers[aliasTarget];
  options.path = aliasPath;

  this.intercepting.push({ aliasRoute, aliasTarget });

  this.route(aliasRoute, options, callback);
};

// Save off the original method in scope of the prototype modifications.
let originalRouteMethod = Ember.RouterDSL.prototype.route;

// We need to do a few things before and after the original route function.
Ember.RouterDSL.prototype.route = function(name, options, callback) {
  Ember.assert('You may not include a "." in your route name.', !~name.indexOf('.'));

  // Method signature identification from the original method.
  if (arguments.length === 2 && typeof options === 'function') {
    callback = options;
    options = {};
  }

  if (arguments.length === 1) {
    options = {};
  }

  // Save off a reference to the original arguments in a reachable scope.
  // This is so later calls to `alias` have something to find.
  if (!this.handlers) { this.handlers = {}; }
  this.handlers[name] = [ options, callback ];

  // For storing the root of the aliased route.
  if (!this.intercepting) { this.intercepting = []; }

  // So, we're "recursing" through a structure, but we can sneak in by wrapping the invoked function.
  if (this.intercepting.length) {

    // Make the callback modify the DSL generated for nested routes.
    // Necessary so they can register themselves.
    // Propogate the original interception information forward.
    var currentIntercepting = this.intercepting[this.intercepting.length - 1];
    let interceptingCallback = function() {
      this.intercepting = [currentIntercepting];
      callback.call(this);
    };

    // Figure out how many routes we created.
    let originalLength = this.matches.length;
    originalRouteMethod.call(this, name, options, callback ? interceptingCallback : undefined);
    let newLength = this.matches.length;

    // Add each of them to the lookup.
    for (let i = originalLength; i < newLength; i++) {
      let intermediate = this.matches[i][1].split('.');
      let qualifiedAliasRoute = intermediate.join('/');
      let qualifiedTargetRoute = qualifiedAliasRoute.replace(currentIntercepting.aliasRoute, currentIntercepting.aliasTarget);

      if (qualifiedAliasRoute !== qualifiedTargetRoute) {
        lookup[qualifiedAliasRoute] = qualifiedTargetRoute;
      } else {
        // For index routes we need to try again with the base intercepting object.
        let isIndex = intermediate.pop().indexOf('index') === 0;
        qualifiedTargetRoute = qualifiedAliasRoute.replace(this.intercepting[0].aliasRoute, this.intercepting[0].aliasTarget);
        if (isIndex && qualifiedAliasRoute !== qualifiedTargetRoute) {
          lookup[qualifiedAliasRoute] = qualifiedTargetRoute;
        }
      }
    }

  } else {
    originalRouteMethod.call(this, name, options, callback);
  }
};

export function initialize() {
  Ember.assert('Addon ember-route-alias has already been initialized for an application. Make sure previous application is destroyed before before creating new one.', !currentApplication || currentApplication.get('isDestroyed'));

  // Make this work in 1.X and 2.X without deprecation warnings.
  currentApplication = arguments[1] || arguments[0];

  // The dictionary we'll be using.
  lookup = currentApplication._routeAliasLookup = {};
}

export default {
  name: 'route-alias',
  initialize: initialize
};
