var a = ["a", "b", "c"];


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  

function kek(){
    var numero = getRandomInt(0, 2);
    document.getElementById("resultado").innerHTML = a[numero];
}

