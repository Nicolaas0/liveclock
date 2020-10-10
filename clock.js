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
    document.body.style.backgroundColor="rgb(77, 92, 221)";
    document.getElementById('day').style.textShadow="0px 0px 0 rgb(135,115,225),0px 1px 0 rgb(130,110,220),0px 2px 0 rgb(125,105,215),0px 3px 0 rgb(120,100,210),0px 4px 0 rgb(115,95,205),0px 5px 0 rgb(110,90,200),0px 6px 0 rgb(105,85,195),0px 7px 0 rgb(100,80,190),0px 8px 0 rgb(95,75,185),0px 9px 0 rgb(90,70,180),0px 10px  0 rgb(85,65,175),0px 11px 10px rgba(0,34,255,0.6),0px 11px 1px rgba(0,34,255,0.5),0px 0px 10px rgba(0,34,255,.2);";
    document.getElementById('clock').style.textShadow="0px 0px 0 rgb(34,91,225),0px 1px 0 rgb(29,86,220),0px 2px 0 rgb(24,81,215),0px 3px 0 rgb(19,76,210),0px 4px 0 rgb(14,71,205),0px 5px 0 rgb(9,66,200),0px 6px 0 rgb(4,61,195),0px 7px 0 rgb(-1,56,190),0px 8px 0 rgb(-6,51,185),0px 9px 0 rgb(-11,46,180),0px 10px  0 rgb(-16,41,175),0px 11px 10px rgba(39,217,158,0.6),0px 11px 1px rgba(39,217,158,0.5),0px 0px 10px rgba(39,217,158,.2);";
    document.getElementById('result').style.textShadow="0px 0px 0 rgb(245,209,30),0px 1px 0 rgb(240,204,25),0px 2px 0 rgb(235,199,20),0px 3px 0 rgb(230,194,15),0px 4px 0 rgb(225,189,10),0px 5px 0 rgb(220,184,5),0px 6px 0 rgb(215,179,0),0px 7px 0 rgb(210,174,0),0px 8px 0 rgb(205,169,0),0px 9px 0 rgb(200,164,0),0px 10px  0 rgb(195,159,0),0px 11px 10px rgba(26,255,0,0.6),0px 11px 1px rgba(26,255,0,0.5),0px 0px 10px rgba(26,255,0,.2);";
  } else if (h < 18) {
    document.getElementById('st1').innerHTML = "https://media.giphy.com/media/h2C7YYwEAj02wGwmfy/giphy.gif";
    document.body.style.backgroundColor="lightsalmon";
    document.getElementById('day').style.textShadow="0px 0px 0 rgb(245,209,30),0px 1px 0 rgb(240,204,25),0px 2px 0 rgb(235,199,20),0px 3px 0 rgb(230,194,15),0px 4px 0 rgb(225,189,10),0px 5px 0 rgb(220,184,5),0px 6px 0 rgb(215,179,0),0px 7px 0 rgb(210,174,0),0px 8px 0 rgb(205,169,0),0px 9px 0 rgb(200,164,0),0px 10px  0 rgb(195,159,0),0px 11px 10px rgba(26,255,0,0.6),0px 11px 1px rgba(26,255,0,0.5), 0px 0px 10px rgba(26,255,0,.2);";
    document.getElementById('clock').style.textShadow="0px 0px 0 rgb(240,111,41),0px 1px 0 rgb(235,106,36),0px 2px 0 rgb(230,101,31),0px 3px 0 rgb(225,96,26),0px 4px 0 rgb(220,91,21),0px 5px 0 rgb(215,86,16),0px 6px 0 rgb(210,81,11),0px 7px 0 rgb(205,76,6),0px 8px 0 rgb(200,71,1),0px 9px 0 rgb(195,66,0),0px 10px  0 rgb(190,61,0),0px 11px 10px rgba(255,0,0,0.6),0px 11px 1px rgba(255,0,0,0.5),0px 0px 10px rgba(255,0,0,.2);";
    document.getElementById('result').style.textShadow="0px 0px 0 rgb(245,209,30),0px 1px 0 rgb(240,204,25),0px 2px 0 rgb(235,199,20),0px 3px 0 rgb(230,194,15),0px 4px 0 rgb(225,189,10),0px 5px 0 rgb(220,184,5),0px 6px 0 rgb(215,179,0),0px 7px 0 rgb(210,174,0),0px 8px 0 rgb(205,169,0),0px 9px 0 rgb(200,164,0),0px 10px  0 rgb(195,159,0),0px 11px 10px rgba(26,255,0,0.6),0px 11px 1px rgba(26,255,0,0.5),0px 0px 10px rgba(26,255,0,.2);";
  } else if(h < 24) {
    document.getElementById('st1').src = "https://media.giphy.com/media/10Mgxh2ctqqz9m/giphy.gif";
    document.body.style.backgroundColor="black";
    document.getElementById('day').style.textShadow="0px 0px 0 rgb(135,154,247),0px 1px 0 rgb(127,146,239),0px 2px 0 rgb(120,139,232),0px 3px 0 rgb(112,131,224),0px 4px 0 rgb(104,123,216),0px 5px 0 rgb(96,115,208),0px 6px 0 rgb(88,107,200),0px 7px 0 rgb(81,100,193),0px 8px 0 rgb(73,92,185),0px 9px 0 rgb(65,84,177),0px 10px  0 rgb(57,76,169),0px 11px 10px rgba(25,34,207,0.95),0px 11px 1px rgba(25,34,207,0.5),0px 0px 10px rgba(25,34,207,.2)";
    document.getElementById('clock').style.textShadow="0px 0px 0 rgb(129,84,173),0px 1px 0 rgb(121,76,165),0px 2px 0 rgb(114,69,158),0px 3px 0 rgb(106,61,150),0px 4px 0 rgb(98,53,142),0px 5px 0 rgb(90,45,134),0px 6px 0 rgb(82,37,126),0px 7px 0 rgb(75,30,119),0px 8px 0 rgb(67,22,111),0px 9px 0 rgb(59,14,103),0px 10px  0 rgb(51,6,95),0px 11px 10px rgba(48,14,43,0.79),0px 11px 1px rgba(48,14,43,0.5),0px 0px 10px rgba(48,14,43,.2)";
    document.getElementById('result').style.textShadow="0px 0px 0 rgb(222,63,111),0px 1px 0 rgb(214,55,103),0px 2px 0 rgb(207,48,96),0px 3px 0 rgb(199,40,88),0px 4px 0 rgb(191,32,80),0px 5px 0 rgb(183,24,72),0px 6px 0 rgb(175,16,64),0px 7px 0 rgb(168,9,57),0px 8px 0 rgb(160,1,49),0px 9px 0 rgb(152,-7,41),0px 10px  0 rgb(144,-15,33),0px 11px 10px rgba(97,65,186,0.95),0px 11px 1px rgba(97,65,186,0.5),0px 0px 10px rgba(97,65,186,.2)";
}
}