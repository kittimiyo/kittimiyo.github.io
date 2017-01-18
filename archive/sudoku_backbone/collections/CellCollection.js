/**
 * Created by sylvie on 8/10/15.
 */

var CellCollection = Backbone.Collection.extend({

  model: CellModel,

  initialize: function() {
    this.set('change', false);
  }

});