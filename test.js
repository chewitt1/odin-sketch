let rows = 27;
let canvas = document.querySelector("#canvas");

for(let i = 0; i < rows; i++){
    canvas.appendChild(Row());
}


function Box(){
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.height = ((440/rows).toString() + "px");
    box.style.width = ((440/rows).toString() + "px");
    return box;
}

function Row(){
    let row = document.createElement("div");
    row.classList.add("row");
    for(let i = 0; i < rows; i++){
        row.appendChild(Box());
    }
    return row;
}