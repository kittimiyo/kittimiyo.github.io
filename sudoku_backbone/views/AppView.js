/**
 * Created by sylvie on 8/10/15.
 */

var AppView = Backbone.View.extend({
  initialize: function(params) {
    this.sudokuView = new SudokuCellsView({collection: this.model.get('cells')});
    this.initialView = new InitialSudokuCellsView({collection: this.model.get('cells')});
  },

  render: function() {
    return this.initialView.render();
  }
});