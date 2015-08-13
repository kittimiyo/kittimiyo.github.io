/**
 * Created by sylvie on 8/11/15.
 */

var HintView = Backbone.View.extend({

  tagName: 'li',

  render: function() {
    this.$el.text(this.model.get('value'));
    return this.$el;
  }
});