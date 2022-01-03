function display() {
    array =[];
    for (var i = 0; i < 25; i++) {
        var k = i+1;
        if (document.getElementById("myId" + k).value != '') {
            array[i] = document.getElementById("myId" + k).value + '<br> ';
             }
    }
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tempnew = array[i];
            array[i] = array[j];
            array[j] = tempnew;
        }
    }

    shuffleArray(array);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var myVal1 = '';
    for (var i = 0; i < 15; i++) {
        //var k = i+1;
        if (document.getElementById("myId" + k).value != '') {
            //temp = document.getElementById("myId" + i).value + '<br> ';
            myVal1 += array[i];
        }
    }
    document.getElementsByClassName("show")[0].innerHTML = myVal1;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var myVal2 = '';
    for (var i = 15; i < 25; i++) {
        //var k = i+1;
        if (document.getElementById("myId" + k).value != '') {
            //temp = document.getElementById("myId" + i).value + '<br> ';
            myVal2 += array[i];
        }
    }
    for (var i = 0; i < 5; i++) {
        //var k = i+1;
        if (document.getElementById("myId" + k).value != '') {
            //temp = document.getElementById("myId" + i).value + '<br> ';
            myVal2 += array[i];
        }
    }
    document.getElementsByClassName("show")[1].innerHTML = myVal2;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var myVal3 = '';
    for (var i = 5; i < 20; i++) {
        var k = i+1;
        if (document.getElementById("myId" + k).value != '') {
            //temp = document.getElementById("myId" + i).value + '<br> ';
            myVal3 += array[i];
        }
    }
    document.getElementsByClassName("show")[2].innerHTML = myVal3;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var myVal4 = '';
    for (var i = 20; i < 25; i++) {
        var k = i+1;
        if (document.getElementById("myId" + k).value != '') {
            //temp = document.getElementById("myId" + i).value + '<br> ';
            myVal4 += array[i];
        }
    }
    for (var i = 0; i < 10; i++) {
        var k = i+1;
        if (document.getElementById("myId" + k).value != '') {
            //temp = document.getElementById("myId" + i).value + '<br> ';
            myVal4 += array[i];
        }
    }
    document.getElementsByClassName("show")[3].innerHTML = myVal4;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var myVal5 = '';
    for (var i = 10; i < 25; i++) {
        var k = i+1;
        if (document.getElementById("myId" + k).value != '') {
            //temp = document.getElementById("myId" + i).value + '<br> ';
            myVal5 += array[i];
        }
    }
    document.getElementsByClassName("show")[4].innerHTML = myVal5;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var myVal6 = '';
    for (var i = 0; i < 15; i++) {
        var k = i+1;
        if (document.getElementById("myId" + k).value != '') {
            //temp = document.getElementById("myId" + i).value + '<br> ';
            myVal6 += array[i];
        }
    }
    document.getElementsByClassName("show")[5].innerHTML = myVal6;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var myVal7 = '';
    for (var i = 15; i < 25; i++) {
        var k = i+1;
        if (document.getElementById("myId" + k).value != '') {
            //temp = document.getElementById("myId" + i).value + '<br> ';
            myVal7 += array[i];
       }
    }
    for (var i = 0; i < 5; i++) {
        var k = i+1;
       if (document.getElementById("myId" + k).value != '') {
            //temp = document.getElementById("myId" + i).value + '<br> ';
            myVal7 += array[i];
        }
    }
    document.getElementsByClassName("show")[6].innerHTML = myVal7;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

       
    


  




}




