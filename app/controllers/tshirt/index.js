import Ember from 'ember';
import fetch from 'fetch';

export default Ember.Controller.extend({
  actions: {
    async remove(tshirt) {
      try {
        const result = await fetch(`http://localhost:3000/tshirts/${tshirt.id}`, {
            method: 'DELETE'
          });

        if (result.ok) {
          this.set('model', this.model.filter(({id}) => id !== tshirt.id));
        }
      } catch (error) {
        this.set('error', 'Something is wrong')
      }
    }
  }
})
