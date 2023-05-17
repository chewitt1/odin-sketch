/*Globals*/
let rows = 27;
let close = false;
let win = true;
let draw = false;
let erase = false;
let color = "pink";

/*jQuery*/
$(document).ready(function(){
    /*Drawing Functions*/
    function setColor(e){
        if(draw){
            this.style.background = color;
        }
    }

    function setErase(e){
        erase = !erase;
        if(erase){
            color = "rgb(243, 220, 224)";
            this.style.background ="#e0aeb5";
            $("#draw").css("background", "transparent");
        }
        else{
            color = "pink";
            this.style.background ="transparent";
            $("#draw").css("background", "#e0aeb5");
        }
    }

    function unsetErase(e){
        erase = false;
        this.style.background ="#e0aeb5";
        $("#erase").css("background", "transparent");
    }

    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mousedown", () => {draw = true;}));
    boxes.forEach(box => box.addEventListener("mouseleave", setColor));
    boxes.forEach(box => box.addEventListener("mouseup", () => {draw = false;}));

    $("#erase").click(setErase);
    $("#draw").click(unsetErase);

    /*Menubar Functions*/
    $(".task-1").click(function(){
      $(".win").hide();
      $("#tab").css("background", "rgb(220, 155, 166)");
    });
    $("#tab").click(function(){
        $("#tab").css("background","#ebb7bf");
        $(".win").show();
    });
    $(".task-2").click(function(){
        if(win){
            $(".icons").slideUp();
            $("footer").hide();
            $("main").css("display", "block");
            $("main").css("margin-left", "380px");
            win = false;
        }
        else{
            $(".icons").slideDown();
            $("footer").show();
            $("main").css("display", "grid");
            $("main").css("margin-left", "0");
            $("main").css("grid-template-columns", "30% 70%");
            win = true;
        }
    });
    $(".task-3").click(function(){
        $(".win").slideUp();
        close = true;
    });
    $("#o-sketch").click(function(){
        $("#o-sketch").css("background-color","rgb(201, 135, 146, .3)");
    });
    $("#o-sketch").dblclick(function(){
        $("#o-sketch").css("background-color","transparent");
        if(!close){
            $(".win").show();
        }
        else{
            $(".win").slideDown();
            close = false;
        }
    });
});

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
    else if(mainClass == "grid-1"){
        tooltip.innerHTML = "Create a new grid";
    }
    else if(mainClass == "grid-2"){
        tooltip.innerHTML = "Reset current grid";
    }
    else if(mainClass == "task-1"){
        tooltip.innerHTML = "Minimize Odin Sketch window";
    }
    else if(mainClass == "task-2"){
        tooltip.innerHTML = "Toggle Windows 95 background";
    }
    else if(mainClass == "task-3"){
        tooltip.innerHTML = "Close Odin Sketch window";
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