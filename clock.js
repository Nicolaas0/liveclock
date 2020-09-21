function clock(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    m = time(m);
    s = time(s);

    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(clock, 500);
}
function time(i){
    if (i < 10) {i = "0"+ i};
    return i;
}

function Getname() {
    var txt;
    var txt2;
    var name = prompt("Siapaaa kahh nama muu");
    if (name == null || name == "") {
      txt = "Masukin nama yang bener dong:( Coba lagi ya!";
      document.getElementById("result").innerHTML = txt;
      setTimeout(function(){
        window.location.reload(1);
     }, 500);
    } else {
      txt2 = name;
      document.getElementById("result").innerHTML = "Hello " + txt2;
    }
}


