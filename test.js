let rows = 27;

/*Create Grid Functions*/
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

/*Tooltip Functions */
function setToolTip(e){
    let val = this.innerHTML;
    let tooltip = document.getElementById("tooltip");
    let mainClass = this.classList[0];
    if(mainClass == "menu-item"){
        if(val == "File"){
            tooltip.innerHTML = "Select File menu item";
        }
        else if(val == "Edit"){
            tooltip.innerHTML = "Select Edit menu item";
        }
        else if(val == "View"){
            tooltip.innerHTML = "Select View menu item";
        }
        else if(val == "Image"){
            tooltip.innerHTML = "Select Image menu item";
        }
        else if(val == "Options"){
            tooltip.innerHTML = "Select Options menu item";
        }
        else if(val == "Help"){
            tooltip.innerHTML = "Select Help menu item";
        }
    }
    else if(mainClass == "tool-button1"){
        tooltip.innerHTML = "Set erase mode";
    }
    else if(mainClass == "tool-button2"){
        tooltip.innerHTML = "Set draw mode";
    }
    else if(mainClass = "grid-button"){
        if(val == "NEW GRID"){
            tooltip.innerHTML = "Create a new grid";
        }
        else if(val == "RESET"){
            tooltip.innerHTML = "Reset current grid";
        }
    }
    else if(mainClass = "task-button"){
        if(val == "-"){
            tooltip.innerHTML = "Minimize Odin Sketch window";
        }
        else if(val == "[ ]"){
            tooltip.innerHTML = "Remove Windows 95 background";
        }
        else if(val == "x"){
            tooltip.innerHTML = "Close Odin Sketch window";
        }
    }
    else{
        console.log(mainClass);
    }
}

function resetToolTip(e){
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = "Tooltips go here (^_^)";
}

let menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => item.addEventListener("mouseover", setToolTip));
menuItems.forEach(item => item.addEventListener("mouseleave", resetToolTip));

let gridButtons = document.querySelectorAll("button");

gridButtons.forEach(butt => butt.addEventListener("mouseover", setToolTip));
gridButtons.forEach(butt => butt.addEventListener("mouseleave", resetToolTip));