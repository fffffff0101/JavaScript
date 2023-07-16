var addButton = document.getElementById("addButton");
var box = document.getElementById("container");
var clearButton = document.getElementById("clearButton");
var countBox = 1;

addButton.addEventListener("click", function() {
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


});

clearButton.addEventListener("click", function() {
    while (box.firstChild) {
        box.firstChild.remove();
    }
    countBox = 0;
});