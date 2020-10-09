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

function getDays(){
  var date = new Date();
  var h = date.getHours();

  if (h < 10) {
    document.getElementById('day').innerHTML = "Good morning";
  } else if (h < 18) {
    document.getElementById('day').innerHTML = "Good day";
  } else if(h < 24) {
    document.getElementById('day').innerHTML = "Good night";
}
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
     }, 5000);
    } else {
      txt2 = name;
      document.getElementById("result").innerHTML = txt2 + "!!";
    }
}

function changeTime(){
  var time = new Date;
  var h = time.getHours();
  if (h < 10) {
    document.getElementById('st1').src= "https://media.giphy.com/media/TercUvhYRPkmkDUNZk/giphy.gif";
    document.body.style.backgroundColor="lightcoral";
  } else if (h < 18) {
    document.getElementById('st1').innerHTML = "https://media.giphy.com/media/h2C7YYwEAj02wGwmfy/giphy.gif";
    document.body.style.backgroundColor="lightsalmon";
    document.getElementById('day').style.backgroundColor="tomato";
  } else if(h < 24) {
    document.getElementById('st1').src = "https://media.giphy.com/media/10Mgxh2ctqqz9m/giphy.gif";
    document.body.style.backgroundColor="rgb(15, 29, 68)";
    document.getElementById('day').style.textShadow="0px 0px 0 rgb(135,154,247),0px 1px 0 rgb(127,146,239),0px 2px 0 rgb(120,139,232),0px 3px 0 rgb(112,131,224),0px 4px 0 rgb(104,123,216),0px 5px 0 rgb(96,115,208),0px 6px 0 rgb(88,107,200),0px 7px 0 rgb(81,100,193),0px 8px 0 rgb(73,92,185),0px 9px 0 rgb(65,84,177),0px 10px  0 rgb(57,76,169),0px 11px 10px rgba(25,34,207,0.95),0px 11px 1px rgba(25,34,207,0.5),0px 0px 10px rgba(25,34,207,.2)"
    document.getElementById('clock').style.textShadow="0px 0px 0 rgb(129,84,173),0px 1px 0 rgb(121,76,165),0px 2px 0 rgb(114,69,158),0px 3px 0 rgb(106,61,150),0px 4px 0 rgb(98,53,142),0px 5px 0 rgb(90,45,134),0px 6px 0 rgb(82,37,126),0px 7px 0 rgb(75,30,119),0px 8px 0 rgb(67,22,111),0px 9px 0 rgb(59,14,103),0px 10px  0 rgb(51,6,95),0px 11px 10px rgba(48,14,43,0.79),0px 11px 1px rgba(48,14,43,0.5),0px 0px 10px rgba(48,14,43,.2)"
    document.getElementById('result').style.textShadow="0px 0px 0 rgb(222,63,111),0px 1px 0 rgb(214,55,103),0px 2px 0 rgb(207,48,96),0px 3px 0 rgb(199,40,88),0px 4px 0 rgb(191,32,80),0px 5px 0 rgb(183,24,72),0px 6px 0 rgb(175,16,64),0px 7px 0 rgb(168,9,57),0px 8px 0 rgb(160,1,49),0px 9px 0 rgb(152,-7,41),0px 10px  0 rgb(144,-15,33),0px 11px 10px rgba(97,65,186,0.95),0px 11px 1px rgba(97,65,186,0.5),0px 0px 10px rgba(97,65,186,.2)"
}
}