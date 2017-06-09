import Ember from 'ember';
import fetch from 'ember-fetch/ajax';

export default Ember.Route.extend({
  title: 'T-Shirts | Shop',
  model() {
    return fetch(`http://localhost:3000/tshirts`);
  }
});
