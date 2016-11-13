<html>
  <head>
    <title>Untitled</title>
    <link rel="icon" href="assets/images/K Logo.png">
    <style>
      body {
        background-image: url("../images/Base_Pasar_3.png");
        background-size: 800px 600px;
        background-repeat: no-repeat;
      }   
      
      .choose {
        width: 125px;
        height: 125px;
        position: absolute;
        z-index: 1;
      }

      #gameBoard {
        width: 800px;
        height: 600px;
        position: absolute;
        background-color: black;
        opacity: 1;
        z-index: 1;
      }

      #message {
        width: 600px;
        height: auto;
        position:absolute;
        z-index: 1;
        top: 400px;
        left: 115px;
        text-align: center;
        color: white;
      }
    </style>
    <script src="assets/js/jquery-3.1.1.min.js"></script>
    <script>
      window.onload = init;
      
      var choose1 = null;
      var choose2 = null;
      var choose3 = null;
      var message = null;
      
      function init() {  
        choose1 = document.getElementById("choose1");
        choose1.style.top = "200px";
        choose1.style.left = "150px";
        choose2 = document.getElementById("choose2");
        choose2.style.top = "200px";
        choose2.style.left = "350px";
        choose3 = document.getElementById("choose3");
        choose3.style.top = "200px";
        choose3.style.left = "550px";
        message = document.getElementById("message");
        message.innerHTML = "Pilih salah satu";
      }
    </script>
  </head>
  <body>
    <div id="gameBoard">
      <img src="assets/images/Untitled-31.png" id="choose1" class="choose" onclick="location.href='tabung.php'">
      <img src="assets/images/Untitled-32.png" id="choose2" class="choose" onclick="location.href='kerucut.php'">
      <img src="assets/images/Untitled-33.png" id="choose3" class="choose" onclick="location.href='bola.php'">
      <div id="message"></div>
    </div>
  </body>
</html>
