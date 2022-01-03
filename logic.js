function display() {
    var myVal1 = '';
    for (var i = 1; i <= 15; i++) {
        if (document.getElementById("myId" + i).value != '') {
            temp = document.getElementById("myId" + i).value + '<br> ';
            myVal1 += temp;
        }
    }
    document.getElementsByClassName("show")[0].innerHTML = myVal1;


    var myVal2 = '';
    for (var i = 16; i <= 25; i++) {
        if (document.getElementById("myId" + i).value != '') {
            temp = document.getElementById("myId" + i).value + '<br> ';
            myVal2 += temp;
        }
    }
    for (var i = 1; i <= 5; i++) {
        if (document.getElementById("myId" + i).value != '') {
            temp = document.getElementById("myId" + i).value + '<br> ';
            myVal2 += temp;
        }
    }
    document.getElementsByClassName("show")[1].innerHTML = myVal2;

    var myVal3 = '';
    for (var i = 6; i <= 20; i++) {
        if (document.getElementById("myId" + i).value != '') {
            temp = document.getElementById("myId" + i).value + '<br> ';
            myVal3 += temp;
        }
    }
    document.getElementsByClassName("show")[2].innerHTML = myVal3;

    var myVal4 = '';
    for (var i = 21; i <= 25; i++) {
        if (document.getElementById("myId" + i).value != '') {
            temp = document.getElementById("myId" + i).value + '<br> ';
            myVal4 += temp;
        }
    }
    for (var i = 1; i <= 10; i++) {
        if (document.getElementById("myId" + i).value != '') {
            temp = document.getElementById("myId" + i).value + '<br> ';
            myVal4 += temp;
        }
    }
    document.getElementsByClassName("show")[3].innerHTML = myVal4;

    var myVal5 = '';
    for (var i = 11; i <= 25; i++) {
        if (document.getElementById("myId" + i).value != '') {
            temp = document.getElementById("myId" + i).value + '<br> ';
            myVal5 += temp;
        }
    }
    document.getElementsByClassName("show")[4].innerHTML = myVal5;

    var myVal6 = '';
    for (var i = 1; i <= 15; i++) {
        if (document.getElementById("myId" + i).value != '') {
            temp = document.getElementById("myId" + i).value + '<br> ';
            myVal6 += temp;
        }
    }
    document.getElementsByClassName("show")[5].innerHTML = myVal6;

    var myVal7 = '';
    for (var i = 16; i <= 25; i++) {
        if (document.getElementById("myId" + i).value != '') {
            temp = document.getElementById("myId" + i).value + '<br> ';
            myVal7 += temp;
        }
    }
    for (var i = 1; i <= 5; i++) {
        if (document.getElementById("myId" + i).value != '') {
            temp = document.getElementById("myId" + i).value + '<br> ';
            myVal7 += temp;
        }
    }
    document.getElementsByClassName("show")[6].innerHTML = myVal7;




}




