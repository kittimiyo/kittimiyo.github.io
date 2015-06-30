/**
 * Created by Sylvie on 6/18/15.
 */

var solve = function(a, change) {
  var hints;
  change = false;

  for(var i = 0; i < 3 ; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          if(!validNum(a[i][j][k][l].value)) {
            hints = getHints(a[i][j][k][l]);
            if(hints.length === 1) {
              a[i][j][k][l].value = hints[0];
              change = true;
            }
          }
        }
      }
    }
  }

  for(var i = 0; i < 3 ; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          if(!validNum(a[i][j][k][l].value)) {
            change = (change || setHintsByGather(a, i, j, k, l));
          }
        }
      }
    }
  }

  change = (change || setHintsByBullet(a));

  return change;
};

var setValuesSingleHint = function() {
  for(var i = 0; i < 3 ; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          if(!validNum(a[i][j][k][l].value)) {
            hints = getHints(a[i][j][k][l]);
            if(hints.length === 1) {
              a[i][j][k][l].value = hints[0];
            }
          }
        }
      }
    }
  }
  setHintsBySweep();
  updateVisual(a);
};

var setValuesByGather = function() {
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
  setHintsBySweep();
  updateVisual(a);
};

setHintsBySweep = function() {
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
  updateVisual(a);
};

var setHintsByBullet = function() {
  var change = false;
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
          change = (change || clearRow(a, i, j, row[0], hint));
        }
        if(allSame(col)) {
          change = (change || clearCol(a, i, j, col[0], hint));
        }
      }
    }
  }
  updateVisual(a);
  return change;
};

var sweepHints = function(a, i, j, k, l) {
  var num = a[i][j][k][l].value;
  var curr;
  for (var m = 0; m < 3; m++) {
    for (var n = 0; n < 3; n++) {
      curr = a[i][j][m][n].value;
      if(!validNum(curr)) {
        a[i][j][m][n].hint[num-1] = '';
      }
    }
  }

  for (m = 0; m < 3; m++) {
    for (n = 0; n < 3; n++) {
      curr = a[i][m][k][n].value;
      if(!validNum(curr)) {
        a[i][m][k][n].hint[num-1] = '';
      }
    }
  }

  for (m = 0; m < 3; m++) {
    for (n = 0; n < 3; n++) {
      curr = a[m][j][n][l].value;
      if(!validNum(curr)) {
        a[m][j][n][l].hint[num-1] = '';
      }
    }
  }
};

var gatherHints = function(a, i, j, k, l, change) {
  var num, curr, found = false, change = false;
  var hints = getHints(a[i][j][k][l]);

  for (var count = 0; count < hints.length; count++) {
    //if(!found){
      found = false;
      num = hints[count];
      for (var m = 0; m < 3; m++) {
        for (var n = 0; n < 3; n++) {
          if((!validNum(a[i][j][m][n].value)) && ((m !== k) || (n !== l))) {
            curr = getHints(a[i][j][m][n]);
            for (var curCount = 0; curCount < curr.length; curCount++) {
              if(num === curr[curCount]) { found = true; }
            }
          }
        }
      }

      if (!found) {
        a[i][j][k][l].value = num;
          change = true;
      }
      else {
        found = false;
        for (var m = 0; m < 3; m++) {
          for (var n = 0; n < 3; n++) {
            if((!validNum(a[i][m][k][n].value)) && ((m !== j) || (n !== l))) {
              curr = getHints(a[i][m][k][n]);
              for (var curCount = 0; curCount < curr.length; curCount++) {
                if(num === curr[curCount]) { found = true; }
              }
            }
          }
        }

        if (!found) {
          a[i][j][k][l].value = num;
          change = true;
        }
        else {
          found = false;
          for (var m = 0; m < 3; m++) {
            for (var n = 0; n < 3; n++) {
              if((!validNum(a[m][j][n][l].value)) && ((m !== i) || (n !== k))) {
                curr = getHints(a[m][j][n][l]);
                for (var curCount = 0; curCount < curr.length; curCount++) {
                  if(num === curr[curCount]) { found = true; }
                }
              }
            }
          }

          if (!found) {
            a[i][j][k][l].value = num;
            change = true;
          }
        }
      }
    //}
  }
  return change;
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
  var change = false;
  for (var curJ = 0; curJ < 3; curJ++) {
    for (var l = 0; l < 3; l++) {
      if((!validNum(a[i][curJ][k][l].value)) && (curJ !== j)) {
        if(a[i][curJ][k][l].hint[num-1] !== '') {
          a[i][curJ][k][l].hint[num - 1] = '';
          change = true;
        }
      }
    }
  }
  return change;
};

var clearCol = function(a, i, j, l, num) {
  var change = false;
  for (var curI = 0; curI < 3; curI++) {
    for (var k = 0; k < 3; k++) {
      if((!validNum(a[curI][j][k][l].value)) && (curI !== i)) {
        if(a[curI][j][k][l].hint[num-1] !== '') {
          a[curI][j][k][l].hint[num - 1] = '';
          change = true;
        }
      }
    }
  }
  return change;
};
