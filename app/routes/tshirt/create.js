import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller) {
    this._super(...arguments);

    controller.reset();
  },

  headData: Ember.inject.service(),
  afterModel() {
    this.set('headData.title', 'T-Shirts | New T-Shirt');
  },
});
