/**
 * Created by sylvie on 8/11/15.
 */

var HintModel = Backbone.Model.extend({

  initialize: function(params) {
    // implied element: 'value'
  },

  update: function(val){
    //triggering an event here will also trigger an event in the hint collection
    this.set('value', val)
  }

});
