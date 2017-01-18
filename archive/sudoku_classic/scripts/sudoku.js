/**
 * Created by sylvie on 8/7/15.
 */

// using pseudoclassical 'class' creation:
var Sudoku = function(inputs) {
  inputs = inputs || [];
  var i, j, k, l, ind;

  this[0] = [[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]]];
  this[1] = [[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]]];
  this[2] = [[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]]];

  this.change = false;

  for(i = 0; i < 3 ; i++) {
    for (j = 0; j < 3; j++) {
      for (k = 0; k < 3; k++) {
        for (l = 0; l < 3; l++) {
          ind = (27*i) + (9*j) + (3*k) + l;
          this[i][j][k][l] = {
            hint: [1,2,3,4,5,6,7,8,9],
            value: validNum(inputs[ind]) ? inputs[ind] : 0,
            index: ind
          };
        }
      }
    }
  }
};

Sudoku.prototype.reset = function() {
  var i, j, k, l;

  for(i = 0; i < 3 ; i++) {
    for (j = 0; j < 3; j++) {
      for (k = 0; k < 3; k++) {
        for (l = 0; l < 3; l++) {
          this[i][j][k][l] = {
            hint: [1,2,3,4,5,6,7,8,9],
            value: null
          };
        }
      }
    }
  }
};

//// using functional-shared 'class' creation:
//var Sudoku = function(inputs) {
//  inputs = inputs || [];
//  var i, j, k, l, ind;
//
//  var arr = [[[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]]],
//    [[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]]],
//    [[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]]]];
//
//  arr.change = false;
//
//  for(i = 0; i < 3 ; i++) {
//    for (j = 0; j < 3; j++) {
//      for (k = 0; k < 3; k++) {
//        for (l = 0; l < 3; l++) {
//          ind = (27*i) + (9*j) + (3*k) + l;
//          arr[i][j][k][l] = {
//            hint: [1,2,3,4,5,6,7,8,9],
//            value: validNum(inputs[ind]) ? inputs[ind] : 0,
//            index: ind
//          };
//        }
//      }
//    }
//  }
//
//  arr.reset = function() {
//    var i, j, k, l;
//
//    for(i = 0; i < 3 ; i++) {
//      for (j = 0; j < 3; j++) {
//        for (k = 0; k < 3; k++) {
//          for (l = 0; l < 3; l++) {
//            arr[i][j][k][l] = {
//              hint: [1,2,3,4,5,6,7,8,9],
//              value: 0
//            };
//          }
//        }
//      }
//    }
//  };
//
//  return arr;
//};
