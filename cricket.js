class GameState {
  constructor() {
    this.turn = null;
    this.ball = 0;
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
    move = parseInt(move);
    if (!this.player1.currentMove) {
      this.player1.currentMove = move;
      document.getElementById("player-hand").src = "/images/" + move + ".svg";
      gameConn.sendData(JSON.stringify(move));

      if (this.player2.currentMove) {
        //show all moves
        document.getElementById("opponent-hand").src =
          "/images/" + this.player2.currentMove + ".svg";
        this.evaluateBall();
      }
    }
  }

  recieveMove(move) {
    move = parseInt(move);
    if (this.player1.currentMove) {
      // show all moves
      this.player2.currentMove = move;
      document.getElementById("opponent-hand").src = "/images/" + move + ".svg";
      this.evaluateBall();
    } else {
      this.player2.currentMove = move;
    }
  }

  evaluateBall() {
    this.ball += 1;
    if (this.player1.currentMove == this.player2.currentMove) {
      this[this.turn].wickets += 1;
      if (this[this.turn].wickets == this.totalWickets) {
        let other = this.turn == "player1" ? "player2" : "player1";
        this.turn = other;
      }
    } else {
      this[this.turn].runs += this[this.turn].currentMove;
    }

    setTimeout(
      function () {
        document.getElementById("player-hand").src = "/images/7.svg";
        document.getElementById("opponent-hand").src = "/images/7.svg";
        document.getElementById("current-score").innerHTML =
          this[this.turn].runs + " - " + this[this.turn].wickets;

        let other = this.turn == "player1" ? "player2" : "player1";

        document.getElementById("last-inning-score").innerHTML =
          this[other].runs + " - " + this[other].wickets;
      }.bind(this),
      2000
    );
    this.player1.currentMove = 0;
    this.player2.currentMove = 0;
  }
}
