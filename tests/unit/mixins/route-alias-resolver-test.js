// import Ember from 'ember';
import Resolver from 'ember-resolver';
import RouteAliasResolver from '../../../mixins/route-alias-resolver';
import { module, test } from 'qunit';

module('Unit | Mixin | route alias resolver');

test('Adds a module name lookup pattern.', function(assert) {
  let base = Resolver.create();
  let baseLength = base.get('moduleNameLookupPatterns').length;

  let subject = Resolver.extend(RouteAliasResolver).create();
  let subjectLength = subject.get('moduleNameLookupPatterns').length;

  assert.equal(baseLength + 2, subjectLength, 'Successfully added two module name lookup patterns.');
});

test('The module name lookup works.', function(assert) {
  let result;
  let subject = Resolver.extend(RouteAliasResolver).create();

  assert.equal(subject.aliasedMainModuleName(), false, 'Returns falsy with no namespace.');

  subject.namespace = {};

  assert.equal(subject.aliasedMainModuleName(), false, 'Returns falsy with no lookup.');

  subject.namespace._routeAliasLookup = {
    'alias-one': 'one',
    'alias-one/a': 'one/a',
    'alias-one/alias-a': 'alias-one/a',
    'not-one': 'alias-one',
  };

  result = subject.aliasedMainModuleName({
    prefix: 'ember-route-alias',
    type: 'something-else',
    fullNameWithoutType: 'something-else'
  });

  assert.equal(result, false, 'Returns falsy when the lookup is for the wrong type.');

  result = subject.aliasedMainModuleName({
    prefix: 'ember-route-alias',
    type: 'template',
    fullNameWithoutType: 'something-else'
  });

  assert.equal(result, false, 'Returns falsy when not found in the lookup.');

  result = subject.aliasedMainModuleName({
    prefix: 'ember-route-alias',
    type: 'template',
    fullNameWithoutType: 'alias-one'
  });

  assert.equal(result, 'ember-route-alias/templates/one', 'Succeeds at simple lookups.');

  result = subject.aliasedMainModuleName({
    prefix: 'ember-route-alias',
    type: 'template',
    fullNameWithoutType: 'not-one'
  });

  assert.equal(result, 'ember-route-alias/templates/one', 'Succeeds at "recursive" lookups, alias to alias.');

  result = subject.aliasedMainModuleName({
    prefix: 'ember-route-alias',
    type: 'template',
    fullNameWithoutType: 'alias-one/alias-a'
  });

  assert.equal(result, 'ember-route-alias/templates/one/a', 'Succeeds at "recursive" lookups.');

});

test('The module name lookup works with a pod-based architecture.', function(assert) {
  let result;
  let subject = Resolver.extend(RouteAliasResolver).create();

  subject.namespace = {};

  subject.namespace._routeAliasLookup = {
    'alias-one': 'one',
    'alias-one/a': 'one/a',
    'alias-one/alias-a': 'alias-one/a',
    'not-one': 'alias-one',
  };

  result = subject.aliasedPodBasedModuleName({
    prefix: 'ember-route-alias',
    type: 'template',
    fullNameWithoutType: 'alias-one'
  });

  assert.equal(result, 'ember-route-alias/one/template', 'Succeeds at simple lookups.');

  result = subject.aliasedPodBasedModuleName({
    prefix: 'ember-route-alias',
    type: 'template',
    fullNameWithoutType: 'not-one'
  });

  assert.equal(result, 'ember-route-alias/one/template', 'Succeeds at "recursive" lookups, alias to alias.');

  result = subject.aliasedPodBasedModuleName({
    prefix: 'ember-route-alias',
    type: 'template',
    fullNameWithoutType: 'alias-one/alias-a'
  });

  assert.equal(result, 'ember-route-alias/one/a/template', 'Succeeds at "recursive" lookups.');

});
