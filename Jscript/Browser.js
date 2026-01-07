let button = document.getElementById("jsButton");
button.addEventListener("click", function() {
    console.log("Событие обработано через JS");
});


let myDiv = document.createElement("div");
myDiv.id = "myDiv";
myDiv.style.width = "200px";
myDiv.style.height = "200px";
myDiv.style.border = "1px solid black";
document.body.appendChild(myDiv);
myDiv.addEventListener("click", function() {
    myDiv.style.backgroundColor = "blue";
});
myDiv.addEventListener("mouseover", function() {
    console.log("Элемент нажат");
});


let textInput = document.createElement("input");
textInput.type = "text";
textInput.id = "textInput";
document.body.appendChild(textInput);
textInput.addEventListener("keyup", function(event) {
    console.log(event.target.value);
});



let myLink = document.createElement("a");
myLink.href = "https://example.com";
myLink.id = "myLink";
myLink.textContent = "Перейти на сайт";
document.body.appendChild(myLink);
myLink.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Переход по ссылке отменен");
});


let myList = document.createElement("ul");
myList.id = "list";
let items = ["Элемент 1", "Элемент 2", "Элемент 3"];
items.forEach(function(itemText) {
    let listItem = document.createElement("li");
    listItem.textContent = itemText;
    myList.appendChild(listItem);
});
document.body.appendChild(myList);
myList.addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "LI") {
        console.log(event.target.textContent);
    }
});


let keyboardInput = document.createElement("input");
keyboardInput.type = "text";
keyboardInput.id = "keyboardInput";
document.body.appendChild(keyboardInput);
keyboardInput.addEventListener("keydown", function(event) {
    console.log("Код нажатой клавиши: " + event.key);
});

