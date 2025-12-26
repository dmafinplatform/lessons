
let messageElement = document.getElementById("message");
messageElement.textContent = "Добро пожаловать в JavaScript!";


let boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "green";
}


let textElement = document.querySelector("#text");
textElement.textContent = "Это измененный текст!";
let boxElements = document.querySelectorAll(".box");
boxElements.forEach(function(box) {
    box.style.border = "2px solid red";
});

 
let highlightedParagraphs = document.querySelectorAll("p.highlight");
highlightedParagraphs.forEach(function(paragraph) {
    paragraph.style.color = "red";
});
