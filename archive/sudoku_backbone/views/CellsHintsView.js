/**
 * Created by sylvie on 8/11/15.
 */

var CellsHintsView = Backbone.View.extend({

  tagName: "ul",

  className: 'hnt',

  initialize: function() {
    this.render();

    this.collection.on('change', this.render, this);
  },

  render: function(){
    var collection = this.collection;
    this.$el.html('<li></li><li></li><li></li>');
    this.$el.children().map(function(childIndex, li) {
      var $li = $(li);
      var $ul = $('<ul class="row"></ul>');
      var listRow = [];
      for(var i = 0; i < 3; i++) {
        listRow.push(new HintView({model: collection.models[(childIndex*3) + i] }).render());
      }
      $ul.append(listRow);
      $li.append($ul);
      return $li;
    })
  }

});
