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

/*MenuBar Functions */
function setToolTip(e){
    let val = this.innerHTML;
    let tooltip = document.getElementById("tooltip");
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

function resetToolTip(e){
    let tooltip = document.getElementById("tooltip");
    tooltip.innerHTML = "Tooltips go here (^_^)";
}

let menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => item.addEventListener("mouseover", setToolTip));
menuItems.forEach(item => item.addEventListener("mouseleave", resetToolTip));