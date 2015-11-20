import Ember from 'ember';
import RelLinkToMixin from '../../../mixins/rel-link-to';
import { module, test } from 'qunit';

module('Unit | Mixin | rel link to');

test('Check _process lookups.', function(assert) {
  let RelLinkToObject = Ember.Object.extend(RelLinkToMixin);
  let subject = RelLinkToObject.create();

  assert.equal(subject._process('foo.bar', ''), 'foo.bar', 'Empty string lookup.');
  assert.equal(subject._process('foo.bar', './'), 'foo.bar', './ lookup.');
  assert.equal(subject._process('foo.bar', '../'), 'foo', '../ lookup.');
  assert.equal(subject._process('foo.bar', '../baz'), 'foo.baz', 'Sibling lookup.');
  assert.equal(subject._process('foo', 'baz'), 'foo.baz', 'Child lookup.');
});
