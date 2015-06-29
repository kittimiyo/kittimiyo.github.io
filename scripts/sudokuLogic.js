/**
 * Created by Sylvie on 6/18/15.
 */

setHints = function(a) {
  //var values = document.getElementsByClassName("inp");
  //var hints = document.getElementsByClassName("hnt");

  for(var i = 0; i < 3 ; i++) {
    for (var j = 0; j < 3; j++) {
      for (var k = 0; k < 3; k++) {
        for (var l = 0; l < 3; l++) {
          ind = (27*i) + (9*j) + (3*k) + l;
          if(validNum(a[i][j][k][l].value)) {
            setHintsByValue(a, i, j, k, l);
          }
        }
      }
    }
  }
};

var solve = function(a, change) {
  var hints, gatheredHints, change = false;

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
  return change;
};

var setHintsByValue = function(a, i, j, k, l) {
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

  for (var m = 0; m < 3; m++) {
    for (var n = 0; n < 3; n++) {
      curr = a[i][m][k][n].value;
      if(!validNum(curr)) {
        a[i][m][k][n].hint[num-1] = '';
      }
    }
  }

  for (var m = 0; m < 3; m++) {
    for (var n = 0; n < 3; n++) {
      curr = a[m][j][n][l].value;
      if(!validNum(curr)) {
        a[m][j][n][l].hint[num-1] = '';
      }
    }
  }
}

var setHintsByGather = function(a, i, j, k, l, change) {
  var num, curr, found = true, change = false;
  var hints = getHints(a[i][j][k][l]);

  for (var count = 0; count < hints.length; count++) {
    if(!found){
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
    }
  }
  return change;
};

var setHintsByBullet = function(a) {
  var i, j, k, l;
  var bullets = [];
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
                if(validNum(curHint)) {
                  
                }
              }
            }
          }
        }
      }
    }
  }


};
