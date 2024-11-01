let boxHeader = document.querySelector("h1");
let boxParagraph = document.querySelector("p");

boxHeader.textContent = "ვენეცია";
boxParagraph.textContent =
  "ვენეცია ვენეტოს რეგიონის დედაქალია. სახელი მომდინარეობს აქ მაცხოვრებელი ანტიკური პერიოდის ხალხისგან, რომლებსაც ვენეტები ეწოდებოდათ.";

boxHeader.classList.add("header");
boxParagraph.classList.add("paragraph");

boxParagraph.style.fontSize = "20px";
boxParagraph.style.color = "#ffff00";
boxParagraph.style.textAlign = "center";

let box = document.querySelector(".box");

let circle = document.createElement("div");
box.appendChild(circle);
circle.classList.add("circle");

circle.onmouseover = () => {
  circle.style.background = "red";
};
circle.onmouseout = () => {
  circle.style.background = "yellow";
};

let button = document.createElement("button");
button.textContent = "DELETE CIRCLE";
button.classList.add("button");

box.appendChild(button);

button.addEventListener("click", () => {
  if (button.textContent === "DELETE CIRCLE") {
    circle.style.display = "none";
    button.textContent = "RETURN CIRCLE";
  } else {
    circle.style.display = "block";
    button.textContent = "DELETE CIRCLE";
  }
});
