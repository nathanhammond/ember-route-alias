import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('rel-link-to', 'Unit | Component | rel link to', {
  unit: true
});

test('Check _process lookups.', function(assert) {
  let subject = this.subject();

  assert.equal(subject._process('foo.bar', ''), 'foo.bar', 'Empty string lookup.');
  assert.equal(subject._process('foo.bar', './'), 'foo.bar', './ lookup.');
  assert.equal(subject._process('foo.bar', '../'), 'foo', '../ lookup.');
  assert.equal(subject._process('foo.bar', '../baz'), 'foo.baz', 'Sibling lookup.');
  assert.equal(subject._process('foo', 'baz'), 'foo.baz', 'Child lookup.');

});
