/**
 * Created by sylvie on 8/10/15.
 */

var InitialCellView = Backbone.View.extend({

  tagName: 'td',

  initialize: function() {
    this.hintsView = new CellsHintsView({collection: this.model.get('hints')});
  },

  render: function() {
    //this.$el.html('<input class="inp" value=' + val + '>').append(this.hintsView.$el);
    if(validNum(this.model.get('value'))) {
      this.$el.html('<input class="inp" value=' + this.model.get('value') + '>');
    }
    else {
      this.$el.html('<input class="inp">');
    }
    return this.$el;
  }

});