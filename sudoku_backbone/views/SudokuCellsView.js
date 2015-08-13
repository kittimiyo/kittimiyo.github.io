/**
 * Created by sylvie on 8/11/15.
 */

var SudokuCellsView = Backbone.View.extend({

  tagName: "div",

  id: 'sudoku',

  initialize: function() {
    this.collection.on('change', this.render, this);
  },

  render: function(){
    var collection = this.collection;
    this.$el.html(
      '<div id="top">' +
        '<table class="t l" id="00">' +
          '<tr></tr><tr></tr><tr></tr>' +
        '</table>' +
        '<table class="t mc" id="01">' +
          '<tr></tr><tr></tr><tr></tr>' +
        '</table>' +
        '<table class="t r" id="02">' +
          '<tr></tr><tr></tr><tr></tr>' +
        '</table>' +
      '</div>' +
      '<div id="mid">' +
        '<table class="mr l" id="10">' +
          '<tr></tr><tr></tr><tr></tr>' +
        '</table>' +
        '<table class="mr mc" id="11">' +
          '<tr></tr><tr></tr><tr></tr>' +
        '</table>' +
        '<table class="mr r" id="12">' +
          '<tr></tr><tr></tr><tr></tr>' +
        '</table>' +
      '</div>' +
      '<div id="bot">' +
        '<table class="b l" id="20">' +
          '<tr></tr><tr></tr><tr></tr>' +
        '</table>' +
        '<table class="b mc" id="21">' +
          '<tr></tr><tr></tr><tr></tr>' +
        '</table>' +
        '<table class="b r" id="22">' +
          '<tr></tr><tr></tr><tr></tr>' +
        '</table>' +
      '</div>');

    var tableRows = this.$el.find('tr');

    for(var i = 0; i < tableRows.length; i++) {
      var $row = $(tableRows[i]);
      $row.append(
        collection.slice(i*3, i*3+3).map(function(cell) {
          return new CellView({model: cell}).render();
        })
      )
    }
    return this.$el;
  }

});
