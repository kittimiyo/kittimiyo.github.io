/**
 * Created by boenkes on 1/9/2015.
 */

var cell = {
    hint: [1,2,3,4,5,6,7,8,9],
    value: '',
    position: -1
}

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
                    position: i+j+k+l
                }
            }
        }
    }
}

var inputs, st, err, ind, val, valid, numberFound = false;
var print = function()
{
    inputs = document.getElementsByClassName("inp");
    valid = true;
    st='';
    err='';
    for(var i=0;i<3;i++)
    {
        for (var j = 0; j < 3; j++)
        {
            for (var k = 0; k < 3; k++)
            {
                for (var l = 0; l < 3; l++)
                {
                    ind = (27*i) + (9*j) + (3*k) + l;
                    if (inputs[ind].value != null)
                    {
                        val = inputs[ind].value;
                        if ((val != 1) && (val != 2) && (val != 3) && (val != 4) && (val != 5) && (val != 6) && (val != 7) && (val != 8) && (val != 9) && (val != ""))
                        {
                            err += "<br>Invalid input at row " + ((i*3)+(k+1)) + ", column " + ((j*3)+(l+1)) +": [" + val +"]";
                            valid = false;
                            val = null;
                        }
                        else if (val !== '')
                        {
                            st += "<br>" + val;
                            numberFound = true;
                        }
                        a[i][j][k][l].value = (val === ('' || null) ? null : Number(val));
                    }
                    else st += 'emp';
                    st+= ' ';
                }
            }
        }
    }
    if(valid && numberFound)
    {
        st += "<br>Inputs are valid!";
        document.getElementById('solve').style.display = 'block';
    }
    if(!numberFound)
    {
      if(err.length > 0) { err += '<br>'; }
      err += "<br>No valid numbers entered."
    }
    document.getElementById("str").innerHTML = st;
    document.getElementById("msg").innerHTML = err;
    numberFound = false;
    console.log(st);
}

