window.onload = ticTacToe;
function ticTacToe() {
  // Connection
  var gameConn = null;
  var gamecodeDiv = document.getElementById("gamecode");
  var runs1 = 0;
  var runs2 = 0;
  var wickets1 = 0;
  var wickets2 = 0;
  var gameState = {};
  gameState.player1;

  var modal = document.getElementById("myModal");
  var usernameInput = document.getElementById("username");
  var gameroomInput = document.getElementById("gameroom");
  var enteroldBtn = document.getElementById("enterold");
  var startnewBtn = document.getElementById("startnew");
  var joingameBtn = document.getElementById("joinGame");
  modal.style.display = "block";

  // Get the modal
  var modal1 = document.getElementById("myModal1");
  var btn = document.getElementById("myBtnn");
  var span = document.getElementsByClassName("close1")[0];
  btn.onclick = function () {
    modal1.style.display = "block";
  };

  span.onclick = function () {
    modal1.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  };

  const coin = document.querySelector("#coin");
  const button = document.querySelector("#flip");
  const status = document.querySelector("#status");
  const heads = document.querySelector("#headsCount");
  const tails = document.querySelector("#tailsCount");

  let headsCount = 0;
  let tailsCount = 0;

  function deferFn(callback, ms) {
    setTimeout(callback, ms);
  }

  function processResult(result) {
    if (result === "heads") {
      headsCount++;
      heads.innerText = headsCount;
    } else {
      tailsCount++;
      tails.innerText = tailsCount;
    }
    status.innerText = result.toUpperCase();
  }

  function flipCoin() {
    coin.setAttribute("class", "");
    const random = Math.random();
    const result = random < 0.5 ? "heads" : "tails";
    deferFn(function () {
      coin.setAttribute("class", "animate-" + result);
      deferFn(processResult.bind(null, result), 2900);
    }, 100);
  }

  button.addEventListener("click", flipCoin);

  function onGetData(data) {
    if (data.username) {
      modal.style.display = "none";
    } else {
      var num = document.getElementById(data);
      leftHand(data);
    }

    console.log(data, " Log by Callback");
  }
  var n;
  function leftHand(n) {
    document.getElementById("opponent-hand").src = "/images/" + n + ".svg";
  }

  startnewBtn.onclick = function () {
    if (usernameInput.value != "") {
      gameConn = new GameConnection("TTT", usernameInput.value, null);
      gameConn.onData(onGetData);
      gamecodeDiv.innerHTML =
        "<h2> Share this code : " +
        gameConn.roomId +
        "</h2> <h4> Waiting for the other player to join...</h4>";
      joingameBtn.style.display = "none";
      startnewBtn.style.display = "none";
    }
  };

  enteroldBtn.onclick = function () {
    const username = usernameInput.value;
    if (usernameInput.value != "" && gameroomInput.value != "") {
      gameConn = new GameConnection(
        "TTT",
        usernameInput.value,
        gameroomInput.value
      );
      gameConn.onData(onGetData);
      gameConn.sendData({ username });
      modal.style.display = "none";
    }
  };

  joingameBtn.onclick = function () {
    startnewBtn.style.display = "none";
    gameroomInput.style.display = "block";
    joingameBtn.style.display = "none";
    enteroldBtn.style.display = "block";
  };
  let controls = document.getElementsByClassName("control");
  for (var i = 1; i < 7; i++)
    (function (i) {
      controls[i - 1].onclick = function () {
        document.getElementById("player-hand").src = "/images/" + i + ".svg";
        gameConn.sendData(JSON.stringify(i));
      };
      console.log(i);
    })(i);
}
