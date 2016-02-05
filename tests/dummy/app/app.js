import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import RouteAliasResolver from 'ember-route-alias/mixins/route-alias-resolver';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver.extend(RouteAliasResolver)
});

loadInitializers(App, config.modulePrefix);

export default App;
