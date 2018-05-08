let testjs = document.getElementById("test")
testjs.style.border = "solid 1pt black"
turn = "red"
winner = ""
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


        const edgeX = board[0].length - 3;
        const edgeY = board.length - 3;
        //display winner on screen is up and down
        for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
            for (let rowIndex = 0; rowIndex < edgeX; rowIndex++) {
                let cell = board[columnIndex][rowIndex];
                if (cell !== 0) {
                    if (cell === board[columnIndex][rowIndex + 1] &&
                        cell === board[columnIndex][rowIndex + 2] &&
                        cell === board[columnIndex][rowIndex + 3]) {
                       
                        document.getElementById("winner").textContent = (winner + "'s a winner up. Click here to Reset");
                        
                        
                    }
                }

            }
        }
        //display winner on screen is row-across
        for (let columnIndex = 0; columnIndex < board.length - 3; columnIndex++) {
            for (let rowIndex = 0; rowIndex < edgeX; rowIndex++) {
                let cell = board[columnIndex][rowIndex];
                if (cell !== 0) {
                    if (cell === board[columnIndex + 1][rowIndex] &&
                        cell === board[columnIndex + 2][rowIndex] &&
                        cell === board[columnIndex + 3][rowIndex]) {
                        document.getElementById("winner").textContent = (winner + "'s a winner across. Click here to Reset")
                        
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
                       
                    }
                }

            }
        }

    }

    document.getElementById("winner").onclick = function(){
        document.getElementById("winner").innerHTML = "Click Here to Reset"
        for(let i=0;i<6;i++){
            let resetColumn =  document.getElementById(i);
            resetColumn.innerHTML = ""
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
    
        
    

