import Ember from 'ember';
const { computed, get } = Ember;

export default Ember.Mixin.create({
  /**
  This is a simplistic traversal function. It does not function
  identically to pathing in a file system. It does use the same nomenclature.

  Be careful and watch for things like generated index routes–the behavior
  will seem wrong but be functioning correctly.

  Examples:
  ```
  (base = 'foo.bar', targetRouteName = '') => 'foo.bar'
  (base = 'foo.bar', targetRouteName = './') => 'foo.bar'
  (base = 'foo.bar', targetRouteName = '../') => 'foo'
  (base = 'foo.bar', targetRouteName = '../baz') => 'foo.baz'
  (base = 'foo', targetRouteName = 'baz') => 'foo.baz'

  ```
  */
  _process(base, targetRouteName) {
    let nextBase, nextTarget, result;

    if (targetRouteName === '' || targetRouteName === './') {
      // Support non-traversing paths.
      return base;
    } else if (targetRouteName.indexOf('../') === 0) {
      nextTarget = targetRouteName.substring(3);
      nextBase = base.split('.');
      nextBase.pop();
      nextBase = nextBase.join('.');
      return this._process(nextBase, nextTarget);
    } else {
      result = [];
      if (base !== '') { result.push(base); }
      if (targetRouteName !== '') { result.push(targetRouteName); }
      return result.join('.');
    }
  },

  /**
  Modified from the original to remove the HAS_BLOCK check, recompute on `base`
  attr changes, and process the provided arguments into a relative link.
  */
  qualifiedRouteName: computed('base', 'targetRouteName', '_routing.currentState', function computeRelLinkToComponentQualifiedRouteName() {
    let params = get(this, 'params').slice();
    let lastParam = params[params.length - 1];
    if (lastParam && lastParam.isQueryParams) {
      params.pop();
    }
    let onlyQueryParamsSupplied = (params.length === 0);
    if (onlyQueryParamsSupplied) {
      return get(this, '_routing.currentRouteName');
    }
    return this._process(get(this, 'base'), get(this, 'targetRouteName'));
  })

});
