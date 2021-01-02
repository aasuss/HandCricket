class GameState {
  constructor() {
    this.turn = null;
    this.ball = 1;
    this.myTurn = 1;
    this.totalWickets = 3;

    this.player1 = {};
    this.player1.currentMove = 0;
    this.player1.runs = 0;
    this.player1.wickets = 0;

    this.player2 = {};
    this.player2.currentMove = 0;
    this.player2.runs = 0;
    this.player2.wickets = 0;
    
  }

  makeMove(move) {
    if(!this.player1.currentMove){
      this.player1.currentMove = move;
      document.getElementById("player-hand").src = "/images/" + move + ".svg";
      gameConn.sendData(JSON.stringify(move));
      
      if (this.player2.currentMove) {
        //show all moves
        document.getElementById("opponent-hand").src = "/images/" + this.player2.currentMove + ".svg";
        this.evaluateBall();
        this.changeBall();
      } 

      
    }
    
  }

  recieveMove(move) {
    if (this.player1.currentMove) {
      // show all moves
      document.getElementById("opponent-hand").src = "/images/" + move + ".svg";
      this.evaluateBall();
      this.changeBall();
    } else {
      this.player2.currentMove = move;
    }
  }



  setTurn(turn) {
    this.turn = turn;
  }

  changeBall() {
    this.ball = this.ball + 1;

    this.player1.currentMove = 0;
    this.player2.currentMove = 0;
    
  }
  
  evaluateBall(){
    this.ball += 1; 
    if(this.player1.currentMove == this.player2.currentMove){
      this[this.turn].wickets += 1 ; 
    }
    if(this.player1.currentMove != this.player2.currentMove){
      this[this.turn].runs += this[this.turn].currentMove;
    }
    
    setTimeout(function (){
      document.getElementById("player-hand").src = "/images/7.svg";
      document.getElementById("opponent-hand").src = "/images/7.svg";
      document.getElementById("current-score").innerHTML = this.player1.runs + " - " + this.player1.wickets ;
      document.getElementById("last-inning-score").innerHTML = this.player2.runs + " - " + this.player2.wickets ;
    }.bind(this),2000)
    console.log(this)
  }
}


