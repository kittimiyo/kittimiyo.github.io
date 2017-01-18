/**
 * Created by boenkes on 1/9/2015.
 */
//todo: requirejs
// require example: var logic = require('./sudokuLogic')

//todo: limit minimum number of integers to 17

var main;

var validNum = function(val) {
  return  ((val === 1) || (val === 2) || (val === 3)
        || (val === 4) || (val === 5) || (val === 6)
        || (val === 7) || (val === 8) || (val === 9));
};

var getHints = function(cell) {
  var arr = [];
  for(var i = 0; i < 9; i++) {
    if(validNum(cell.hint[i])) {
      arr.push(cell.hint[i]);
    }
  }

  return arr;
};

var st, err, ind, val, numberFound = false;

var load = function(a) {
  a = a || main;

  var inputs = document.getElementsByClassName("inp");
  var valid = true;

  st='';
  err='';
  for(var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          ind = (27*i) + (9*j) + (3*k) + l;
          if (inputs[ind].value != null) {
            val = Number(inputs[ind].value);
            if (!validNum(val)) {
              if ((val !== '') && (val !== 0)) {
                err += "<br>Invalid input at row " + ((i*3)+(k+1)) + ", column " + ((j*3)+(l+1)) +": [" + val +"]";
                valid = false;
              }

              val = 0;
            } else {
              st += "<br>" + val;
              numberFound = true;
              console.log("  inputs[", ind, "] = ", val, ";");
            }
            a[i][j][k][l].value = Number(val);
          }
          else st += 'emp';
          st+= ' ';
        }
      }
    }
  }

  if(valid && numberFound) {
    st += "<br>Inputs are valid!";
    document.getElementById('solve').style.display = 'block';
    document.getElementById('test').style.display = 'none';
  }

  if(!numberFound) {
    if(err.length > 0) { err += '<br>'; }
    err += "<br>No valid numbers entered."
  }

  document.getElementById("str").innerHTML = st;
  document.getElementById("msg").innerHTML = err;
  numberFound = false;
  console.log(st);
};

var updateVisual = function(a, hideHints) {
  a = a || main;

  for(var i = 0; i < 3 ; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          updateVisualCell(a, i, j, k, l, hideHints);
        }
      }
    }
  }
};


var updateVisualCell = function(a, i, j, k, l, hideHints) {
  a = a || main;

  var values = document.getElementsByClassName("inp");
  var hints = document.getElementsByClassName("hnt");
  var ind = (27*i) + (9*j) + (3*k) + l;

  if(validNum(a[i][j][k][l].value) || hideHints) {
    values[ind].value = a[i][j][k][l].value;
    for (var m = 0; m < 3; m++) {
      for (var n = 0; n < 3; n++) {
        hints[ind].getElementsByClassName('row')[m].getElementsByTagName('li')[n].innerText = '';
      }
    }
  } else {
    values[ind].value = '';
    if(!hideHints) {
      for (var o = 0; o < 3; o++) {
        for (var p = 0; p < 3; p++) {
          hints[ind].getElementsByClassName('row')[o].getElementsByTagName('li')[p].innerText = a[i][j][k][l].hint[3 * o + p];
        }
      }
    }
  }
};


//var testSud = function(test) {
//  var inputs = [];
//
//  if(test === 1) {
//    inputs[0] = 5;
//    inputs[5] = 7;
//    inputs[6] = 1;
//    inputs[9] = 2;
//    inputs[10] = 9;
//    inputs[12] = 6;
//    inputs[13] = 8;
//    inputs[14] = 3;
//    inputs[15] = 5;
//    inputs[22] = 2;
//    inputs[25] = 6;
//    inputs[32] = 9;
//    inputs[33] = 4;
//    inputs[36] = 8;
//    inputs[42] = 7;
//    inputs[43] = 2;
//    inputs[46] = 1;
//    inputs[48] = 5;
//    inputs[52] = 9;
//    inputs[54] = 3;
//    inputs[56] = 1;
//    inputs[62] = 8;
//    inputs[70] = 5;
//    inputs[71] = 7;
//    inputs[72] = 8;
//    inputs[73] = 5;
//    inputs[77] = 2;
//  }
//  else if(test === 2) {
//    inputs[2] = 1;
//    inputs[5] = 6;
//    inputs[7] = 4;
//    inputs[12] = 3;
//    inputs[14] = 9;
//    inputs[17] = 7;
//    inputs[19] = 2;
//    inputs[22] = 4;
//    inputs[23] = 8;
//    inputs[25] = 1;
//    inputs[31] = 6;
//    inputs[32] = 4;
//    inputs[34] = 2;
//    inputs[35] = 8;
//    inputs[36] = 4;
//    inputs[39] = 1;
//    inputs[41] = 2;
//    inputs[44] = 5;
//    inputs[45] = 5;
//    inputs[46] = 3;
//    inputs[48] = 8;
//    inputs[49] = 9;
//    inputs[55] = 1;
//    inputs[57] = 6;
//    inputs[58] = 9;
//    inputs[61] = 3;
//    inputs[63] = 7;
//    inputs[66] = 2;
//    inputs[68] = 8;
//    inputs[73] = 5;
//    inputs[75] = 1;
//    inputs[78] = 2;
//  }
//
//  setUpSudoku(inputs)
//};


var testSud = function(test) {
  var cells;
  if(test === 1) {
    // set up model objects
    cells = new CellCollection(sudokuData1);
  }
  else if(test === 2) {
    // set up model objects
    cells = new CellCollection(sudokuData2);
  }
  else return;

  var app = new AppModel({cells: cells});

  // build a view for the top level of the whole app
  var appView = new AppView({model: app});

  // put the view onto the screen
  $('#sudoku').html(appView.render());
};


var setUpSudoku = function(inputs) {
  var a = new Sudoku(inputs);
  main = a;

  setHintsBySweep(a);
  updateVisual(a);

  document.getElementById('solve').style.display = 'block';
  document.getElementById('reset').style.display = 'block';
  document.getElementById('load').style.display = 'none';

  var tests = document.getElementsByClassName('test');
  var i;
  for (i = 0; i < tests.length; i++) {
    tests[i].style.display = 'none';
  }
};

var solve = function(a) {
  a = a || main;

  document.getElementById('solve').style.display = 'none';

  solveSudoku(a);
};

var reset = function(a) {
  a = a || main;

  document.getElementById('reset').style.display = 'none';
  document.getElementById('solve').style.display = 'none';
  document.getElementById('load').style.display = 'block';

  var tests = document.getElementsByClassName('test');
  var i;
  for (i = 0; i < tests.length; i++) {
    tests[i].style.display = 'block';
  }

  a.reset();

  updateVisual(a, true);
};
