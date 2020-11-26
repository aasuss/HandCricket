window.onload = ticTacToe;
function ticTacToe() 
{
    // Connection
    var gameConn = null;
    var gamecodeDiv = document.getElementById("gamecode");
    var runs1 = 0;
    var runs2 = 0;
    var wickets1 = 0;
    var wickets2 = 0;

    var modal = document.getElementById("myModal");
    var usernameInput = document.getElementById("username");
    var gameroomInput = document.getElementById("gameroom");
    var enteroldBtn = document.getElementById("enterold");
    var startnewBtn = document.getElementById("startnew");
    modal.style.display = "block";

    function onGetData(data) 
    {
        console.log(data, " Log by Callback");
    }

    startnewBtn.onclick = function () {
        if (usernameInput.value != "") {
          modal.style.display = "none";
          gameConn = new GameConnection("TTT", usernameInput.value, null);
          gameConn.onData(onGetData);
          gamecodeDiv.innerHTML = gameConn.roomId;
        }
      };
    
    enteroldBtn.onclick = function () 
    {
        if (usernameInput.value != "" && gameroomInput.value != "") {
        modal.style.display = "none";
        gameConn = new GameConnection("TTT", usernameInput.value, gameroomInput.value);
        gameConn.onData(onGetData);
        }
    };
   
    document.getElementById("0").onclick = function() {myFunction()};
    document.getElementById("1").onclick = function() {myFunction1()};
    document.getElementById("2").onclick = function() {myFunction2()};
    document.getElementById("3").onclick = function() {myFunction3()};
    document.getElementById("4").onclick = function() {myFunction4()};
    document.getElementById("5").onclick = function() {myFunction5()};
    document.getElementById("6").onclick = function() {myFunction6()};
    document.getElementById("7").onclick = function() {myFunction7()};
    function myFunction() {
        document.getElementById("player-hand").src='/images/one.svg'
    }
    function myFunction1() {
        document.getElementById("player-hand").src='/images/two.svg'
    }
    function myFunction2() {
        document.getElementById("player-hand").src='/images/three.svg'
    }
    function myFunction3() {
        document.getElementById("player-hand").src='/images/four.svg'
    }    
    function myFunction4() {
        document.getElementById("player-hand").src='/images/five.svg'
    }
    function myFunction5() {
        document.getElementById("player-hand").src='/images/six.svg'
    }
    function myFunction6() {
        document.getElementById("player-hand").src='/images/dodge.svg'
    }
    function myFunction7() {
        document.getElementById("player-hand").src='/images/deadball.svg'
    }
}