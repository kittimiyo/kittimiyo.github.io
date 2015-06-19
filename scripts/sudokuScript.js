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
          value: null,
          index: (27*i) + (9*j) + (3*k) + l
        }
      }
    }
  }
}

var inputs, st, err, ind, val, valid, numberFound = false;
var print = function() {
  inputs = document.getElementsByClassName("inp");
  valid = true;
  st='';
  err='';
  for(var i=0;i<3;i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          ind = (27*i) + (9*j) + (3*k) + l;
          if (inputs[ind].value != null) {
            val = inputs[ind].value;
            if ((val !== '1') && (val !== '2') && (val !== '3')
              && (val !== '4') && (val !== '5') && (val !== '6')
              && (val !== '7') && (val !== '8') && (val !== '9')) {
              if (val !== '') {
                err += "<br>Invalid input at row " + ((i*3)+(k+1)) + ", column " + ((j*3)+(l+1)) +": [" + val +"]";
                valid = false;
              }

              val = null;
            } else {
              st += "<br>" + val;
              numberFound = true;
              console.log("ind: " + ind + " value: " + val);
            }
            a[i][j][k][l].value = (val === null ? null : Number(val));
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

var test = function() {
  inputs = [];
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
          if(inputs[ind] !== null) { a[i][j][k][l].value = inputs[ind]}
          else a[i][j][k][l].value = null;
        }
      }
    }
  }

  setHints(a);
};
