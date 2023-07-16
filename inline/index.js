var addButton = document.getElementById("addButton");
var box = document.getElementById("container");
var clearButton = document.getElementById("clearButton");
var countBox = 1;

function addBox(){
    var newDiv = document.createElement("div");
    newDiv.className = "box";
    newDiv.textContent = "Box " + (++countBox);

    var newButton = document.createElement("button");
    newButton.className = "delete-button";
    newButton.textContent = "X";

    newDiv.appendChild(newButton);
    box.appendChild(newDiv);

    
}

function delBox(){
    newDiv.remove();
}

function clearBox(){
    while (box.firstChild) {
        box.firstChild.remove();
    }
    countBox = 0;
}