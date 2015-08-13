/**
 * Created by sylvie on 8/11/15.
 */

var HintCollection = Backbone.Collection.extend({
  //contains 'array' of hints, accessible using this.at(index)

  model: HintModel,

  initialize: function() {
    
  },

  update: function(ind, val) {
    this.at(ind).update(val);
  }

});