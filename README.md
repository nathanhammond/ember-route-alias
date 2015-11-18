# ember-route-alias

[![Build Status](https://travis-ci.org/nathanhammond/ember-route-alias.svg)](https://travis-ci.org/nathanhammond/ember-route-alias)
[![npm version](https://badge.fury.io/js/ember-route-alias.svg)](http://badge.fury.io/js/ember-route-alias)
[![Ember Observer Score](http://emberobserver.com/badges/ember-route-alias.svg)](http://emberobserver.com/addons/ember-route-alias)
[![Code Climate](https://codeclimate.com/github/nathanhammond/ember-route-alias/badges/gpa.svg)](https://codeclimate.com/github/nathanhammond/ember-route-alias)

This Ember addon does two things:
1. **Makes it easy to create multiple paths to the same route** - By default it uses the same set of assets as the original route, but individual assets for each route can be overidden.
2. **Enables marking routes as invalid terminal (aka leafmost) routes** - Doing so requires declaring what route should actually be the terminal route.

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

  this.route('non-terminal', function() {
    this.route('index', { path: '/', terminal: 'non-terminal.terminal' });
    this.route('sibling', { terminal: 'non-terminal.terminal' });
    this.route('terminal');
  });
});
```

Electively you may add assets for any of the aliased routes by their name and it will load those assets instead. (The custom resolver is placed last in the queue.) For example, in `templates/alias-one.hbs`:

```handlebars
This template will be loaded instead of <pre>templates/one.hbs</pre>.

{{outlet}}
```

## Running the sample application

The included sample application contains complete usage examples.

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Also available via GitHub Pages [http://nathanhammond.github.io/ember-route-alias/](http://nathanhammond.github.io/ember-route-alias/)

## Running Tests

* `npm run test`

## Pushing an updated sample app

```sh
ember github-pages:commit --message "First publish." --environment=gh-pages`
git push
```
