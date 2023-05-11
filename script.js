window.onload = () => {
    let main = document.querySelector(".main");
    
    for(var i = 0; i < 16; i++){
        main.appendChild(getRow());
    }
}

function getDiv(){
    let grid = document.createElement("div");
    grid.classList.add("box");
    return grid;
}

function getRow(){
    let row = document.createElement("div");
    row.classList.add("grid-row");
    for(var i = 0; i < 16; i++){
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

document.addEventListener("mouseover", changeColor)