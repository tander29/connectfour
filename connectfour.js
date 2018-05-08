let testjs = document.getElementById("test")
testjs.style.border = "solid 1pt black"
turn="red"
const displayTurn = document.getElementById("displayTurn")
const columns = document.getElementsByClassName("column");

let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

for(let column of columns){
    column.addEventListener('click',dropDisc)
    
}
    function dropDisc(event){
        
        let clickedColumn = event.target;
        if(clickedColumn.childElementCount >= 6){
            alert("There are already 6 in this column!")
        }else{
        let newDisc = document.createElement("div");
        if(turn === "red"){ 
            redDisc = newDisc.className = "redDisc"
            displayTurn.className= "redDisc"
            turn= "black"
             }else{
            blackDisc = newDisc.className = "blackDisc"
            displayTurn.className= "blackDisc"
            turn= "red"
            }
            clickedColumn.appendChild(newDisc);   
        }    
        
       
        // board[wrapper.childElementCount][clickedColumn.childElementCount] = "R"
        
        

        

    }

    