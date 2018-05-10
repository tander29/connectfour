let turn = "red"
let winner = ""
let gameover = ""
let newDisc = ""
const displayTurn = document.getElementById("displayTurn")
const columns = document.getElementsByClassName("column");
let wrapper = document.getElementsByClassName("wrapper");
displayTurn.className = "displayRed";
let board = [
    ["", 0, 0, 0, 0, 0],
    ["", 0, 0, 0, 0, 0],
    ["", 0, 0, 0, 0, 0],
    ["", 0, 0, 0, 0, 0],
    ["", 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],

]

for (let column of columns) {
    column.addEventListener('click', dropDisc);


}
function dropDisc(event) {
    let clickedColumn = event.currentTarget;
   
        let arrayNumber = parseInt(clickedColumn.id);
        console.log(arrayNumber);
        
        if (clickedColumn.childElementCount >= 6) {
            alert("There are already 6 in this column!");
        } else {
            newDisc = document.createElement("div");
            newDisc.className = "disc";
            if (turn === "red") {
                redDisc = newDisc.className = "redDisc";
                displayTurn.className = "displayBlack";
                turn = "black";
                winner = "Red";
            } else {
                blackDisc = newDisc.className = "blackDisc";
                displayTurn.className = "displayRed";
                turn = "red";
                winner = "black";
            }
            clickedColumn.appendChild(newDisc);
        }



        // console.log(arrayNumber)
        //board[arrayNumber][clickedColumn.childElementCount-1] = "R"
        // console.log(board[arrayNumber])

        if (turn == "red") {
            //the below are opposite B and R due to when  above the turn is redefined
            board[arrayNumber][clickedColumn.childElementCount - 1] = "B";
        } else {
            board[arrayNumber][clickedColumn.childElementCount - 1] = "R";
        }
        console.log(board[arrayNumber]);
        console.log(board);



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
                        document.getElementById("winner").textContent = (winner + "'s a winner up. Keep playing or click here to Reset");
                        gameover = winner;
                        // newDisc.classList.add("winnerDisc")
                        // document.body.appendChild(newDisc)
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
                        document.getElementById("winner").textContent = (winner + "'s a winner across. Keep playing or click here to Reset")
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
                        document.getElementById("winner").textContent = (winner + "'s a upright Diagonal. Keep playing or click here to Reset")
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
                        document.getElementById("winner").textContent = (winner + "'s down left Diagonal. Keep playing or click here to Reset");
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
            resetColumn.innerHTML = "";
            gameover = "";
         
        
         }
         winner= ""
         board = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
        
        ]
    }

    
//     //astro boy animation below
//     var bee = document.getElementById("bee");
//     document.addEventListener("mousemove", getMouse); 
        let mouseHover = document.getElementById("displayTurn");
        document.addEventListener("mousemove", getMouse)

        mouseHover.style.position = "absolute";
//     bee.style.position = "absolute"; //css	
        let mousePos = {x:0, y:0};

//     var beepos = {x:0, y:0};
        setInterval(followMouse, 20);
//     setInterval(followMouse, 50);
        let mouse = {x:0, y:0};

//     var mouse = {x:0, y:0}; //mouse.x, mouse.y

function getMouse(e){
    mouse.x = e.pageX;
    mouse.y = e.pageY;
}
//     var dir = "right";
//     function getMouse(e){
//         mouse.x = e.pageX;
//         mouse.y = e.pageY;
//     //Checking directional change
//     if(mouse.x > beepos.x){
//       dir = "right";
//     } else {
//       dir = "left";
//     }
//     }
    
        function followMouse(){
            let distX = mouse.x - mousePos.x;
            let distY = mouse.y - mousePos.y;
        

            mousePos.x += distX/5;
            mousePos.y += distY/2;

        
            mouseHover.style.left = mousePos.x+110 + "px";
            mouseHover.style.top = mousePos.y-40 + "px";

        }
  
        


let mouseJordan = document.getElementById("jordan");
document.addEventListener("mousemove", getMouse1)

mouseJordan.style.position = "absolute";
	
let mousePos1 = {x:0, y:0};


setInterval(followMouse1, 20);

let mouse1 = {x:0, y:0};



function getMouse1(e1){
mouse1.x = e1.pageX;
mouse1.y = e1.pageY;
}


function followMouse1(){
    let distX1 = mouse1.x - mousePos1.x;
    let distY1 = mouse1.y - mousePos1.y;
    mousePos1.x += distX1/5;
    mousePos1.y += distY1/2;

    mouseJordan.style.left = mousePos1.x+20 + "px";
    mouseJordan.style.top = mousePos1.y-40 + "px";

}
        
    

