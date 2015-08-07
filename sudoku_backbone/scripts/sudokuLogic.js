/**
 * Created by Sylvie on 6/18/15.
 */

var solveSudoku = function(a) {
  a = a || main;

  //runLoop(true);
  solveLoop(a, 0);
};

var solveLoop = function(a, ct) {
  a = a || main;

  setTimeout(function() {
    console.log('looping: ', ct);
    ct++;
    a.change = false;
    setValuesSingleHint();
    setValuesByGather();
    setHintsByBullet();
    if(a.change) { solveLoop(ct); }
    //if(a.change) { addCalls([{ fcn: solveLoop, args: [ct] }]); }
    //else { addCalls([{ fcn: stopLoop, args: [] }]); }
  else { stopLoop(); }
  }, 1000);
};

var setValue = function(a, i, j, k, l, val) {
  a = a || main;

  //var temp = a[i][j][k][l].value;

  a[i][j][k][l].value = val;
  sweepHints(a, i, j, k, l);
  updateVisualCell(a, i, j, k, l);
  a.change = true;

  //if(validNum(a[i][j][k][l].value) && !(temp === val)) {
  //  addCalls([
  //    { fcn: sweepHints, args: [a, i, j, k, l] },
  //    { fcn: updateVisualCell, args: [a, i, j, k, l] }
  //  ]);
  //  a.change = true;
  //}
};

var removeHint = function(a, i, j, k, l, ind) {
  a = a || main;

  a[i][j][k][l].hint[ind] = '';
  updateVisualCell(a, i, j, k, l);
  a.change = true;
};

var setValuesSingleHint = function(a) {
  a = a || main;

  for(var i = 0; i < 3 ; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          if(!validNum(a[i][j][k][l].value)) {
            hints = getHints(a[i][j][k][l]);
            if(hints.length === 1) {
              setValue(a, i, j, k, l, hints[0]);
            }
          }
        }
      }
    }
  }
};

var setValuesByGather = function(a) {
  a = a || main;

  for(var i = 0; i < 3 ; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          if(!validNum(a[i][j][k][l].value)) {
            gatherHints(a, i, j, k, l);
          }
        }
      }
    }
  }
};

setHintsBySweep = function(a) {
  a = a || main;

  for(var i = 0; i < 3 ; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          ind = (27*i) + (9*j) + (3*k) + l;
          if(validNum(a[i][j][k][l].value)) {
            sweepHints(a, i, j, k, l);
          }
        }
      }
    }
  }
};

var setHintsByBullet = function(a) {
  a = a || main;

  var hints = [];

  for(var i = 0; i < 3 ; i++) {
    for (var j = 0; j < 3; j++) {
      for (var hint = 1; hint < 10; hint++) {
        var row = [];
        var col = [];
        for (var k = 0; k < 3; k++) {
          for (var l = 0; l < 3; l++) {
            if(!validNum(a[i][j][k][l].value)) {
              hints = getHints(a[i][j][k][l]);
              for (var count = 0; count < hints.length; count++) {
                var curHint = hints[count];
                if(curHint === hint) {
                  row.push(k);
                  col.push(l);
                }
              }
            }
          }
        }
        if(allSame(row)) {
          clearRow(a, i, j, row[0], hint);
        }
        if(allSame(col)) {
          clearCol(a, i, j, col[0], hint);
        }
      }
    }
  }
};

var sweepHints = function(a, i, j, k, l) {
  a = a || main;

  var num = a[i][j][k][l].value;
  var curr;
  for (var m = 0; m < 3; m++) {
    for (var n = 0; n < 3; n++) {
      curr = a[i][j][m][n].value;
      if(!validNum(curr)) {
        removeHint(a, i, j, m, n, num-1);
      }
    }
  }

  for (m = 0; m < 3; m++) {
    for (n = 0; n < 3; n++) {
      curr = a[i][m][k][n].value;
      if(!validNum(curr)) {
        removeHint(a, i, m, k, n, num-1);
      }
    }
  }

  for (m = 0; m < 3; m++) {
    for (n = 0; n < 3; n++) {
      curr = a[m][j][n][l].value;
      if(!validNum(curr)) {
        removeHint(a, m, j, n, l, num-1);
      }
    }
  }
};

var gatherHints = function(a, i, j, k, l) {
  a = a || main;

  var num, curr, curCount, found = false;
  var hints = getHints(a[i][j][k][l]);

  for (var count = 0; count < hints.length; count++) {
    found = false;
    num = hints[count];
    for (var m = 0; m < 3; m++) {
      for (var n = 0; n < 3; n++) {
        if((!validNum(a[i][j][m][n].value)) && ((m !== k) || (n !== l))) {
          curr = getHints(a[i][j][m][n]);
          for (curCount = 0; curCount < curr.length; curCount++) {
            var current = curr[curCount];
            if(num === current) { found = true; }
          }
        }
      }
    }

    if (!found) {
      setValue(a, i, j, k, l, num);
    }
    else {
      found = false;
      for (var m = 0; m < 3; m++) {
        for (var n = 0; n < 3; n++) {
          if((!validNum(a[i][m][k][n].value)) && ((m !== j) || (n !== l))) {
            curr = getHints(a[i][m][k][n]);
            for (curCount = 0; curCount < curr.length; curCount++) {
              if(num === curr[curCount]) { found = true; }
            }
          }
        }
      }

      if (!found) {
        setValue(a, i, j, k, l, num);
      }
      else {
        found = false;
        for (var m = 0; m < 3; m++) {
          for (var n = 0; n < 3; n++) {
            if((!validNum(a[m][j][n][l].value)) && ((m !== i) || (n !== k))) {
              curr = getHints(a[m][j][n][l]);
              for (curCount = 0; curCount < curr.length; curCount++) {
                if(num === curr[curCount]) { found = true; }
              }
            }
          }
        }

        if (!found) {
          setValue(a, i, j, k, l, num);
        }
      }
    }
  }
};

var allSame = function(arr) {
  if(arr.length > 0) {
    var val = arr[0];
    var same = true;

    for (var count = 1; count < arr.length; count++) {
      if(arr[count] !== val) { same = false; }
    }

    return same;
  }

  return false;
};

var clearRow = function(a, i, j, k, num) {
  a = a || main;

  for (var curJ = 0; curJ < 3; curJ++) {
    for (var l = 0; l < 3; l++) {
      if((!validNum(a[i][curJ][k][l].value)) && (curJ !== j)) {
        if(a[i][curJ][k][l].hint[num-1] !== '') {
          removeHint(a, i, curJ, k, l, num-1);
        }
      }
    }
  }
};

var clearCol = function(a, i, j, l, num) {
  a = a || main;

  for (var curI = 0; curI < 3; curI++) {
    for (var k = 0; k < 3; k++) {
      if((!validNum(a[curI][j][k][l].value)) && (curI !== i)) {
        if(a[curI][j][k][l].hint[num-1] !== '') {
          removeHint(a, curI, j, k, l, num-1);
        }
      }
    }
  }
};
