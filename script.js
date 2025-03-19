// Function to change text content dynamically
function changeText() {
    document.getElementById("title").textContent = "Text Changed!";
    document.getElementById("description").textContent = "You clicked the button!";
}

// Function to modify CSS styles dynamically
function changeStyle() {
    document.body.style.backgroundColor = "#f4a261";
    document.getElementById("title").style.color = "white";
    document.getElementById("title").style.fontSize = "2.5rem";
}

// Function to add or remove an element dynamically
function toggleElement() {
    let container = document.getElementById("container");
    let existingElement = document.getElementById("dynamicElement");

    if (existingElement) {
        existingElement.remove(); // Remove the element if it exists
    } else {
        let newElement = document.createElement("p");
        newElement.id = "dynamicElement";
        newElement.textContent = "This is a dynamically added element!";
        newElement.style.color = "blue";
        container.appendChild(newElement);
    }
}
