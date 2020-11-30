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




    // Get the modal
var modal1 = document.getElementById("myModal1");
var btn = document.getElementById("myBtnn");
var span = document.getElementsByClassName("close1")[0]; 
btn.onclick = function() {
  modal1.style.display = "block";
}
span.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}













const coin = document.querySelector('#coin');
const button = document.querySelector('#flip');
const status = document.querySelector('#status');
const heads = document.querySelector('#headsCount');
const tails = document.querySelector('#tailsCount');

let headsCount = 0;
let tailsCount = 0;


function deferFn(callback, ms) {
  setTimeout(callback, ms); 
}

function processResult(result) {
   if (result === 'heads') {
      headsCount++;
      heads.innerText = headsCount;
    } else {
      tailsCount++;
      tails.innerText = tailsCount;
    }
    status.innerText = result.toUpperCase();
}

function flipCoin() {
  coin.setAttribute('class', '');
  const random = Math.random();
  const result = random < 0.5 ? 'heads' : 'tails';
 deferFn(function() {
   coin.setAttribute('class', 'animate-' + result);
   deferFn(processResult.bind(null, result), 2900);
 }, 100);
}

button.addEventListener('click', flipCoin);




















    function onGetData(data) 
    {
        console.log(data, " Log by Callback");
        var num = document.getElementById(data);
        leftHand(data);
    }
    var n;
    function leftHand(n)
    {
        if(n==0)
        {
            document.getElementById("opponent-hand").src='/images/one.svg'
        }
        else if(n==1)
        {
            document.getElementById("opponent-hand").src='/images/two.svg'
        }
        if(n==2)
        {
            document.getElementById("opponent-hand").src='/images/three.svg'
        }
        if(n==3)
        {
            document.getElementById("opponent-hand").src='/images/four.svg'
        }
        if(n==4)
        {
            document.getElementById("opponent-hand").src='/images/five.svg'
        }
        if(n==5)
        {
            document.getElementById("opponent-hand").src='/images/six.svg'
        }
        if(n==6)
        {
            document.getElementById("opponent-hand").src='/images/dodge.svg'
        }
        if(n==7)
        {
            document.getElementById("opponent-hand").src='/images/deadball.svg'
        }
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
        gameConn.sendData(JSON.stringify(0));
    }
    function myFunction1() {
        document.getElementById("player-hand").src='/images/two.svg'
        gameConn.sendData(JSON.stringify(1));
    }
    function myFunction2() {
        document.getElementById("player-hand").src='/images/three.svg'
        gameConn.sendData(JSON.stringify(2));
    }
    function myFunction3() {
        document.getElementById("player-hand").src='/images/four.svg'
        gameConn.sendData(JSON.stringify(3));
    }    
    function myFunction4() {
        document.getElementById("player-hand").src='/images/five.svg'
        gameConn.sendData(JSON.stringify(4));
    }
    function myFunction5() {
        document.getElementById("player-hand").src='/images/six.svg'
        gameConn.sendData(JSON.stringify(5));
    }
    function myFunction6() {
        document.getElementById("player-hand").src='/images/dodge.svg'
        gameConn.sendData(JSON.stringify(6));
    }
    function myFunction7() {
        document.getElementById("player-hand").src='/images/deadball.svg'
        gameConn.sendData(JSON.stringify(7));
    }
}