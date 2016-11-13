window.onload = init;

var player = null;
var movement = null;
var gameBoard = null;
var choose2 = null;
var message = null;
var soal = null;
var jawaban1 = null;
var jawaban2 = null;
var jawaban3 = null;
var jawaban4 = null;

function init() {
  player = document.getElementById("player");
  player.src = "assets/images/Player Cowok0004.png";
  player.style.top = "175px";
  player.style.left = "485px";
  movement = setInterval(function() {movePlayer()}, 250);
  message = document.getElementById("message");
  message.style.visibility = "hidden";
  gameBoard = document.getElementById("gameBoard");
  gameBoard.style.visibility = "hidden";
  choose2 = document.getElementById("choose2");
  choose2.style.top = "200px";
  choose2.style.left = "150px";
  choose2.style.visibility = "hidden";
  soal = document.getElementById("soal");
  soal.style.visibility = "hidden";
  jawaban1 = document.getElementById("jawaban1");
  jawaban1.style.visibility = "hidden";
  jawaban2 = document.getElementById("jawaban2");
  jawaban2.style.visibility = "hidden";
  jawaban3 = document.getElementById("jawaban3");
  jawaban3.style.visibility = "hidden";
  jawaban4 = document.getElementById("jawaban4");
  jawaban4.style.visibility = "hidden";
}

function movePlayer() {
  if(parseInt(player.style.left) > 265) {
    player.style.left = parseInt(player.style.left) + 6 + "px";
  }
  if(parseInt(player.style.top) < 635) {
    player.style.top = parseInt(player.style.top) + 4 + "px";
  }
  if(player.style.top <= "267px" && player.style.left >= "623px") {
    stopPlayer();
  }
}

function stopPlayer() {
  clearInterval(movement);
  movement = null;
  gameBoard.style.visibility = "visible";
  message.innerHTML = "Pilih salah satu";
  message.style.visibility = "visible";
  choose2.style.visibility = "visible";
  game(2);
}

function game(num) {  
  choose2.style.left = "350px";
  message.innerHTML = "Ini adalah kerucut<br>kerucut hanya memiliki lingkaran di bawah, sisi atasnya lancip jadi memiliki tinggi dan sisi miring<br>Luas selimut kerucut adalah phi / 22/7 / 3,14 * jari-jari * panjang sisi miring<br>Luas permukaan kerucut adalah phi / 22/7 / 3,14 * jari-jari * panjang sisi miring + phi / 22/7 / 3,14 * jari-jari<sup>2</sup><br>Volume kerucut adalah phi / 22/7 / 3,14 * jari-jari<sup>2</sup> * tinggi * 1/3";
  setTimeout(function() {showQuestion(num)}, 15000);
}

function showQuestion(num) {
  message.innerHTML = "Soal ke-1<br>klik pada pilihan jawaban yang menurut Anda benar";  
  choose2.style.left = "150px";
  soal.innerHTML = "Berapakah volume kerucut disamping jika jari-jarinya 7cm dan tingginya 1 cm?";
  jawaban1.innerHTML = "a. 6cm<sup>2</sup>";
  jawaban2.innerHTML = "b. 12cm<sup>2</sup>";
  jawaban3.innerHTML = "c. 22cm<sup>2</sup>";
  jawaban4.innerHTML = "d. 20cm<sup>2</sup>";
  soal.style.visibility = "visible";
  jawaban1.style.visibility = "visible";
  jawaban2.style.visibility = "visible";
  jawaban3.style.visibility = "visible";
  jawaban4.style.visibility = "visible";
  $("#jawaban1").click(function() {
    checkQuestion(1);
  });
  $("#jawaban2").click(function() {
    checkQuestion(2);
  });
  $("#jawaban3").click(function() {
    checkQuestion(3);
  });
  $("#jawaban4").click(function() {
    checkQuestion(4);
  });
}

function checkQuestion(num) {
  if(num == 3) {
    message.innerHTML = "Benar<br>Tekan disini untuk kembali ke awal";
  } else {
    message.innerHTML = "Salah<br>Tekan disini untuk kembali ke awal";
  }
  $("#jawaban1").off("click");
  $("#jawaban2").off("click");
  $("#jawaban3").off("click");
  $("#jawaban4").off("click");
  $("#message").click(function() {
    location.reload();
  });
}