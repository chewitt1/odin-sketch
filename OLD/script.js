let rows = 16;
let size = 460/rows;
let canvas = document.querySelector(".canvas");
let draw = false;
let erase = false;
window.onload = () => {
    for(var i = 0; i < rows; i++){
        canvas.appendChild(getRow());
    }
}

function getDiv(){
    let grid = document.createElement("div");
    grid.classList.add("box");
    grid.setAttribute("ondrag", "changeColor(e)")
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
    if(e != undefined){
        if(draw){
            const target = e.target.closest(".box");
            if(target){
                if(erase){
                    target.classList.remove("box-touch");
                    target.classList.add("box-erase");
                }
                else{
                    target.classList.remove("box-erase");
                    target.classList.add("box-touch");
                }
            }
        }
    }
}

function removeAllChildNodes() {//From:https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
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
            canvas.appendChild(getRow());
        }
    }
    
}

document.addEventListener("mousedown", (e) => {draw = true;});
document.addEventListener("mouseup", (e) => {draw = false;});
document.addEventListener("mousemove", changeColor);

const newGrid = document.querySelector("#new");
newGrid.addEventListener("click", generateGrid);

const eraseBox = document.querySelector("#erase");

function setErase(){
    console.log(erase);
    erase = !erase;
    if(erase){
        eraseBox.style.background = "pink";
    }
    else{
        eraseBox.style.background = "rgb(201, 135, 146)";
    }
}

eraseBox.addEventListener("click", setErase);