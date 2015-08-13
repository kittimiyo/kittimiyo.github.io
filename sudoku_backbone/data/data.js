/**
 * Created by sylvie on 8/12/15.
 */

var index = [], sudokuData2 = [];

index[2] = 1;
index[5] = 6;
index[7] = 4;
index[12] = 3;
index[14] = 9;
index[17] = 7;
index[19] = 2;
index[22] = 4;
index[23] = 8;
index[25] = 1;
index[31] = 6;
index[32] = 4;
index[34] = 2;
index[35] = 8;
index[36] = 4;
index[39] = 1;
index[41] = 2;
index[44] = 5;
index[45] = 5;
index[46] = 3;
index[48] = 8;
index[49] = 9;
index[55] = 1;
index[57] = 6;
index[58] = 9;
index[61] = 3;
index[63] = 7;
index[66] = 2;
index[68] = 8;
index[73] = 5;
index[75] = 1;
index[78] = 2;

for (var i = 0; i < 81; i++) {
  sudokuData2.push({
    value: index[i] ? index[i] : 0,
    index: i
  });
}