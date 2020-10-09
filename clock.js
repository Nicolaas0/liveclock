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
    document.getElementById('day').style.backgroundImage="url(img/pawel-czerwinski-bX9B9c-YasY-unsplash.jpg)"
    document.getElementById('clock').style.backgroundImage="url(img/brandon-vazquez.jpg)"
    document.getElementById('result').style.backgroundImage="url(img/pawel-czerwinski-bX9B9c-YasY-unsplash.jpg)"
}
}