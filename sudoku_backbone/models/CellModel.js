/**
 * Created by sylvie on 8/10/15.
 */

var CellModel = Backbone.Model.extend({

  initialize: function(params) {
    // implied values: value, index
    var hints = [
      {
        value: 1
      },
      {
        value: 2
      },
      {
        value: 3
      },
      {
        value: 4
      },
      {
        value: 5
      },
      {
        value: 6
      },
      {
        value: 7
      },
      {
        value: 8
      },
      {
        value: 9
      }
    ];

    this.set('hints', new HintCollection(hints));
  }

});
