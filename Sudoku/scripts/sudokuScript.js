/**
 * Created by boenkes on 1/9/2015.
 */
//todo: requirejs
//todo: limit minimum number of integers to 17
//require example: var logic = require('./sudokuLogic')

var a = [[[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]] ],
  [ [[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]] ],
  [ [[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]]]];

for (var i=0;i<3;i++) {
  for(var j=0;j<3;j++) {
    for (var k=0;k<3;k++) {
      for (var l=0;l<3;l++) {
        a[i][j][k][l] = {
          hint: [1,2,3,4,5,6,7,8,9],
          value: 0,
          index: (27*i) + (9*j) + (3*k) + l,
          change: false
        }
      }
    }
  }
}

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

var load = function() {
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
              console.log("ind: " + ind + " value: " + val);
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

var updateVisual = function(a) {


  for(var i = 0; i < 3 ; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          updateVisualCell(a, i, j, k, l);
        }
      }
    }
  }
};

var updateVisualCell = function(a, i, j, k, l) {
  var values = document.getElementsByClassName("inp");
  var hints = document.getElementsByClassName("hnt");
  var ind = (27*i) + (9*j) + (3*k) + l;

  if(validNum(a[i][j][k][l].value)) {
    values[ind].value = a[i][j][k][l].value;
    for (var m = 0; m < 3; m++) {
      for (var n = 0; n < 3; n++) {
        hints[ind].getElementsByClassName('row')[m].getElementsByTagName('li')[n].innerText = '';
      }
    }
  } else {
    for (var o = 0; o < 3; o++) {
      for (var p = 0; p < 3; p++) {
        hints[ind].getElementsByClassName('row')[o].getElementsByTagName('li')[p].innerText = a[i][j][k][l].hint[3*o + p];
      }
    }
  }
};


var test = function() {
  var inputs = [];
  inputs[0] = 5;
  inputs[5] = 7;
  inputs[6] = 1;
  inputs[9] = 2;
  inputs[10] = 9;
  inputs[12] = 6;
  inputs[13] = 8;
  inputs[14] = 3;
  inputs[15] = 5;
  inputs[22] = 2;
  inputs[25] = 6;
  inputs[32] = 9;
  inputs[33] = 4;
  inputs[36] = 8;
  inputs[42] = 7;
  inputs[43] = 2;
  inputs[46] = 1;
  inputs[48] = 5;
  inputs[52] = 9;
  inputs[54] = 3;
  inputs[56] = 1;
  inputs[62] = 8;
  inputs[70] = 5;
  inputs[71] = 7;
  inputs[72] = 8;
  inputs[73] = 5;
  inputs[77] = 2;

  for(var i = 0; i < 3 ; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          ind = (27*i) + (9*j) + (3*k) + l;
          if(inputs[ind] !== undefined) { a[i][j][k][l].value = inputs[ind] }
          else a[i][j][k][l].value = 0;
        }
      }
    }
  }

  setHintsBySweep();
  updateVisual(a);

  document.getElementById('solve').style.display = 'block';
  document.getElementById('test').style.display = 'none';
  document.getElementById('options').style.display = 'block';
};

var solveTest = function() {
  var change = true;
  while (change) {
    change = solveLoop(a);
  }
};

var solveLoop = function(a, change) {
  setHints(a);
  updateSudoku(a);
  return solve(a, change);
};
