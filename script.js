let rows = 16;
let size = 560/rows;
let main = document.querySelector(".main");
window.onload = () => {
    for(var i = 0; i < rows; i++){
        main.appendChild(getRow());
    }
}

function getDiv(){
    let grid = document.createElement("div");
    grid.classList.add("box");
    grid.style.minHeight = (size + "px");
    grid.style.minWidth = (size + "px");
    return grid;
}

function getRow(){
    let row = document.createElement("div");
    row.classList.add("grid-row");
    row.style.gridTemplateColumns = "repeat(" + rows + ", 1fr)";
    for(var i = 0; i < rows; i++){
        row.appendChild(getDiv());
    }
    return row;
}

function changeColor(e){
    const target = e.target.closest(".box");
    if(target){
        target.classList.add("box-touch");
    }
}

function removeAllChildNodes() {//From:https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }
}

function generateGrid(){
    let response =prompt("Please enter number of rows", "16");
    if(isNaN(response)){
        alert("Row values but be a number between 16 and 100");
    }
    else{
        rows = Number(response);
        size = 560/rows;
        removeAllChildNodes();
        for(var i = 0; i < rows; i++){
            main.appendChild(getRow());
        }
    }
    
}

document.addEventListener("mouseover", changeColor);

const newGrid = document.querySelector("#new");
newGrid.addEventListener("click", generateGrid);