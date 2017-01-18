/**
 * Created by sylvie on 8/12/15.
 */

var sudokuData = [];

for (var i = 0; i < 81; i++) {
  sudokuData.push({
    value: 0,
    index: i
  });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var sudokuEntries1 = [], sudokuData1 = [];

sudokuEntries1[0] = 5;
sudokuEntries1[5] = 7;
sudokuEntries1[6] = 1;
sudokuEntries1[9] = 2;
sudokuEntries1[10] = 9;
sudokuEntries1[12] = 6;
sudokuEntries1[13] = 8;
sudokuEntries1[14] = 3;
sudokuEntries1[15] = 5;
sudokuEntries1[22] = 2;
sudokuEntries1[25] = 6;
sudokuEntries1[32] = 9;
sudokuEntries1[33] = 4;
sudokuEntries1[36] = 8;
sudokuEntries1[42] = 7;
sudokuEntries1[43] = 2;
sudokuEntries1[46] = 1;
sudokuEntries1[48] = 5;
sudokuEntries1[52] = 9;
sudokuEntries1[54] = 3;
sudokuEntries1[56] = 1;
sudokuEntries1[62] = 8;
sudokuEntries1[70] = 5;
sudokuEntries1[71] = 7;
sudokuEntries1[72] = 8;
sudokuEntries1[73] = 5;
sudokuEntries1[77] = 2;

for (var i = 0; i < 81; i++) {
  sudokuData1.push({
    value: sudokuEntries1[i] ? sudokuEntries1[i] : 0,
    index: i
  });
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var sudokuEntries2 = [], sudokuData2 = [];

sudokuEntries2[2] = 1;
sudokuEntries2[5] = 6;
sudokuEntries2[7] = 4;
sudokuEntries2[12] = 3;
sudokuEntries2[14] = 9;
sudokuEntries2[17] = 7;
sudokuEntries2[19] = 2;
sudokuEntries2[22] = 4;
sudokuEntries2[23] = 8;
sudokuEntries2[25] = 1;
sudokuEntries2[31] = 6;
sudokuEntries2[32] = 4;
sudokuEntries2[34] = 2;
sudokuEntries2[35] = 8;
sudokuEntries2[36] = 4;
sudokuEntries2[39] = 1;
sudokuEntries2[41] = 2;
sudokuEntries2[44] = 5;
sudokuEntries2[45] = 5;
sudokuEntries2[46] = 3;
sudokuEntries2[48] = 8;
sudokuEntries2[49] = 9;
sudokuEntries2[55] = 1;
sudokuEntries2[57] = 6;
sudokuEntries2[58] = 9;
sudokuEntries2[61] = 3;
sudokuEntries2[63] = 7;
sudokuEntries2[66] = 2;
sudokuEntries2[68] = 8;
sudokuEntries2[73] = 5;
sudokuEntries2[75] = 1;
sudokuEntries2[78] = 2;

for (var i = 0; i < 81; i++) {
  sudokuData2.push({
    value: sudokuEntries2[i] ? sudokuEntries2[i] : 0,
    index: i
  });
}