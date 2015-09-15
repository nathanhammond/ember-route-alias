# ember-route-alias

[![Build Status](https://travis-ci.org/nathanhammond/ember-route-alias.svg)](https://travis-ci.org/nathanhammond/ember-route-alias)
[![npm version](https://badge.fury.io/js/ember-route-alias.svg)](http://badge.fury.io/js/ember-route-alias)
[![Ember Observer Score](http://emberobserver.com/badges/ember-route-alias.svg)](http://emberobserver.com/addons/ember-route-alias)
[![Code Climate](https://codeclimate.com/github/nathanhammond/ember-route-alias/badges/gpa.svg)](https://codeclimate.com/github/nathanhammond/ember-route-alias)

This Ember addon makes it easy to create multiple paths to the same route. By default it uses the same set of assets as the original route, but individual assets for each route can be overidden.

It also includes a simple `{{#rel-link-to}}` helper to make template reuse easier.

**Warning:** This addon monkey-patches the private `Ember.RouterDSL#route` method. As a result this addon can easily be broken by changes in Ember core. It is, however, used by a major product in the Ember ecosystem and will be kept up-to-date as best as possible.

## Usage

`ember install ember-route-alias`

In `app.js`:
```javascript
import RouteAliasResolver from 'ember-route-alias/mixins/route-alias-resolver';

App = Ember.Application.extend({
  /* ... */
  Resolver: Resolver.extend(RouteAliasResolver)
});
```

In `router.js`:
```javascript
Router.map(function() {
  this.route('one', function() {
    this.route('a', function () {
      this.route('i', function() {});
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
```

Electively you may add assets for any of the aliased routes by their name and it will load those assets instead. (The custom resolver is placed last in the queue.) For example, in `templates/alias-one.hbs`:

```handlebars
This template will be loaded instead of <pre>templates/one.hbs</pre>.

{{outlet}}
```

## Running The Sample Application

The included sample application contains complete usage examples.

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `ember test`
* `ember test --server`
