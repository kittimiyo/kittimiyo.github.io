/**
 * Created by boenkes on 1/9/2015.
 */

var a = [[[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]]],[[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]]],[[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,1],[1,1,1]]]];
for (var i=0;i<3;i++) {
    for(var j=0;j<3;j++) {
        for (var k=0;k<3;k++) {
            for (var l=0;l<3;l++) {
                a[i][j][k][l] = i+j+k+l;
            }
        }
    }
}

var inputs;
var st;
var ind;
var val;
var valid;
var print = function()
{
    inputs = document.getElementsByClassName("inp");
    valid = true;
    st='';
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
                            st += "<br>Invalid input at row " + ((i*3)+(k+1)) + ", column " + ((j*3)+(l+1)) +": [" + inputs[ind].value +"]";
                            valid = false;
                        }
                        else if (val == '')
                        {
                            st += inputs[ind].value;
                        }
                        else st += "<br>" + inputs[ind].value;
                    }
                    else st += 'emp';
                    st+= ' ';
                }
            }
        }
    }
    if(valid)
    {
        st += "<br>Inputs are valid!";
        document.getElementById('solve').display = 'none';
    }
    document.getElementById("str").innerHTML = st;
    console.log(st);
}

