var addButton = document.getElementById("addButton");
var box = document.getElementById("container");
var clearButton = document.getElementById("clearButton");
var countBox = 1;
var countBoxNumber = 1;

addButton.addEventListener("click", function() {
    if(countBoxNumber >= 20){
        alert("You can't add more than 20 boxes");
        return;
    }

    var newDiv = document.createElement("div");
    newDiv.className = "box";
    newDiv.textContent = "Box " + (++countBox);

    var newButton = document.createElement("button");
    newButton.className = "delete-button";
    newButton.textContent = "X";

    newDiv.appendChild(newButton);
    box.appendChild(newDiv);

    newButton.addEventListener("click", function() {
        newDiv.remove();
    });

    countBoxNumber++;
});

clearButton.addEventListener("click", function() {
    while (box.firstChild) {
        box.firstChild.remove();
    }
    countBox = 0;
});
