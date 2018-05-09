let turn = "red"
let winner = ""
let gameover = ""
const displayTurn = document.getElementById("displayTurn")
const columns = document.getElementsByClassName("column");
let wrapper = document.getElementsByClassName("wrapper");

let board = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],

]

for (let column of columns) {
    column.addEventListener('click', dropDisc)


}
function dropDisc(event) {
    let clickedColumn = event.currentTarget;
    // if (clickedColumn.id === "disc") {
    //     alert("Can't add a checker to a checker silly, click above on the column");

    // } else {
        let arrayNumber = parseInt(clickedColumn.id)
        console.log(arrayNumber)
        
        if (clickedColumn.childElementCount >= 6) {
            alert("There are already 6 in this column!")
        } else {
            let newDisc = document.createElement("div");
            newDisc.className = "disc"
            if (turn === "red") {
                redDisc = newDisc.className = "redDisc"
                displayTurn.className = "blackDisc"
                turn = "black"
                winner = "Red"
            } else {
                blackDisc = newDisc.className = "blackDisc"
                displayTurn.className = "redDisc"
                turn = "red"
                winner = "Black"
            }
            clickedColumn.appendChild(newDisc);
        }



        // console.log(arrayNumber)
        //board[arrayNumber][clickedColumn.childElementCount-1] = "R"
        // console.log(board[arrayNumber])

        if (turn == "red") {
            //the below are opposite B and R due to when  above the turn is redefined
            board[arrayNumber][clickedColumn.childElementCount - 1] = "B"
        } else {
            board[arrayNumber][clickedColumn.childElementCount - 1] = "R"
        }
        console.log(board[arrayNumber])
        console.log(board)



        if(gameover === ""){
        const edgeX = board[0].length - 3;
        const edgeY = board.length - 3;
        //display winner on screen is up and down
        for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
            for (let rowIndex = 0; rowIndex < board[0].length; rowIndex++) {
                let cell = board[columnIndex][rowIndex];
                if (cell !== 0) {
                    if (cell === board[columnIndex][rowIndex + 1] &&
                        cell === board[columnIndex][rowIndex + 2] &&
                        cell === board[columnIndex][rowIndex + 3]) {
                        document.getElementById("winner").textContent = (winner + "'s a winner up. Click here to Reset");
                        gameover = winner
                        
                    }
                }

            }
        }
        //display winner on screen is row-across
        for (let columnIndex = 0; columnIndex < board.length - 3; columnIndex++) {
            for (let rowIndex = 0; rowIndex < board[0].length; rowIndex++) {
                let cell = board[columnIndex][rowIndex];
                if (cell !== 0) {
                    if (cell === board[columnIndex + 1][rowIndex] &&
                        cell === board[columnIndex + 2][rowIndex] &&
                        cell === board[columnIndex + 3][rowIndex]) {
                        document.getElementById("winner").textContent = (winner + "'s a winner across. Click here to Reset")
                        gameover = winner
                    }
                }

            }
        }
        //diagonal up right
        for (let columnIndex = 0; columnIndex < edgeY; columnIndex++) {
            for (let rowIndex = 0; rowIndex < edgeX; rowIndex++) {
                let cell = board[columnIndex][rowIndex];
                if (cell !== 0) {
                    if (cell === board[columnIndex + 1][rowIndex + 1] &&
                        cell === board[columnIndex + 2][rowIndex + 2] &&
                        cell === board[columnIndex + 3][rowIndex + 3]) {
                        document.getElementById("winner").textContent = (winner + "'s a upright Diagonal. Click here to Reset")
                        gameover = winner
                    }
                }

            }
        }
        //diagonal down left
        for (let columnIndex = 3; columnIndex < board.length; columnIndex++) {
            for (let rowIndex = 0; rowIndex < edgeX; rowIndex++) {
                let cell = board[columnIndex][rowIndex];
                if (cell !== 0) {
                    if (cell === board[columnIndex - 1][rowIndex + 1] &&
                        cell === board[columnIndex - 2][rowIndex + 2] &&
                        cell === board[columnIndex - 3][rowIndex + 3]) {
                        document.getElementById("winner").textContent = (winner + "'s down left Diagonal. Click here to Reset");
                        gameover = winner
                    }
                }

            }
        }

    }
}


    document.getElementById("winner").onclick = function(){
        document.getElementById("winner").innerHTML = "Click Here to Reset"
        for(let i=0;i< 7 ;i++){
            let resetColumn =  document.getElementById(i);
            resetColumn.innerHTML = ""
            gameover=""
         }
         let board = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        
        ]
    }
    
    //astro boy animation below
    var bee = document.getElementById("bee");
    document.addEventListener("mousemove", getMouse); 


    bee.style.position = "absolute"; //css		
    var beepos = {x:0, y:0};

    setInterval(followMouse, 50);
    
    var mouse = {x:0, y:0}; //mouse.x, mouse.y
    
    var dir = "right";
    function getMouse(e){
        mouse.x = e.pageX;
        mouse.y = e.pageY;
    //Checking directional change
    if(mouse.x > beepos.x){
      dir = "right";
    } else {
      dir = "left";
    }
    }
    
    function followMouse(){
        //1. find distance X , distance Y
        var distX = mouse.x - beepos.x;
        var distY = mouse.y - beepos.y;
        //Easing motion
   //Progressive reduction of distance 
        beepos.x += distX/5;
        beepos.y += distY/2;
        
        bee.style.left = beepos.x + "px";
        bee.style.top = beepos.y + "px";
  
  
    //Apply css class 
    if (dir == "right"){
      bee.setAttribute("class", "right");
    } else {
      bee.setAttribute("class", "left");        
    }
        
    }
        
    

