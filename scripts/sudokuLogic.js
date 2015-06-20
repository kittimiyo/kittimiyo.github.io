/**
 * Created by Sylvie on 6/18/15.
 */

//test = function() {
//  console.log('test passed');
//};

setHints = function(a, cell) {
    for(var val = 0; val < 9; val++) {
        cycleBox(a, val);
    }
};

cycleBox = function(a, ind) {
    var val;
    i = (ind - (ind % 27))/27;
    ind -= i;
    j = (ind - ((ind) % 9))/9;
    ind -= j;
    k = (ind - (ind % 3))/3;
    ind -= k;
    l = ind;
    for(var addK = 0; addK < 3; addK++) {
        for(addL = 0; addL < 3; addL++) {
            val = a[i][j][k + addK][l + addL].value;
            if(val !== 0) {
                for(var countL = 0; countL < 3; countL++) {
                    set = a[i][j][k + addK][countL].value;
                    if(set === 0) {
                        a[i][j][k + addK][countL].hint.splice(val-1, 1);
                    }
                }
            }
        }
    }
}