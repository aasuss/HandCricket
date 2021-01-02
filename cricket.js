class GameState{
    constructor(_totalOvers){
        this.turn = 1;
        this.innings = 1;
        this.over = 1;
        this.ball = 1;
        this.totalOvers =_totalOvers;


        let player;
        player.currentMove = "";
        player.runs = 0;
        player.wickets = 0;
        this.player1 = player;
        this.player2 = player;
    }
    makeMove(move){
        if(this.player2.currentMove){
            // send my move and show all moves
            this.changeBall();
            
        }
        else{
            this.player1.currentMove = move;
        }

    }
    recieveMove(move){

        if(this.player1.currentMove){
            // show all moves
            this.changeBall();
            
        }
        else{
            // store their move
        }

    }
    changeBall(){
        if(this.ball == 6){
            this.ball = 1;
            this.over = this.over+1; 
        }
        this.player1.currentMove = null;
        this.player2.currentMove = null;

    }

    
}