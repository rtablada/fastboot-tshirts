import Ember from 'ember';
import Changeset from 'ember-changeset';
import fetch from 'fetch';

export default Ember.Controller.extend({
  reset() {
    this.set('tshirt', {});
    this.set('tshirtChangeset', new Changeset(this.tshirt));
  },

  actions: {
    async saveForm(ev) {
      ev.preventDefault();

      const changeset = this.tshirtChangeset;

      try {
        await changeset.validate();

        await changeset.save();

        const values = this.tshirt;

        const response = await fetch('http://localhost:3000/tshirts', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });

        if (response.ok) {
          this.transitionToRoute('tshirt');
        } else {
          this.set('error', 'Error saving to server');
        }
      } catch (error) {
        console.log(erorr);
        this.set('error', 'Please Try Again');
      }
    }
  }
});
