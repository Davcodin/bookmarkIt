let button = document.getElementById("myButton");
let submitEmail = document.getElementById("submit");
let doc = document.getElementById("e-mail");
let pattern = document.getElementById("paragraphFive");
let speedy = document.getElementById("speedy");
let bookmark = document.getElementById("bookmarks");
let simple = document.getElementById("simple-booking");
let simply = document.querySelector(".simple-bookmark");
let speeding = document.querySelector(".speeding");
let easy = document.querySelector(".Easy");
let easyTwo = document.querySelector("#easy");

let selectDown = document.getElementsByTagName("select")[0];
selectDown.addEventListener("click", () => {
  selectDown.classList.toggle("rotate");
  document.getElementById("paragraphTwo").classList.toggle("visible");
});
var selectDownTwo = document.getElementsByTagName("select")[1];
selectDownTwo.addEventListener("click", () => {
  selectDownTwo.classList.toggle("rotate");
  document.getElementById("paragraphOne").classList.toggle("visibility");
});
var selectDownThree = document.getElementsByTagName("select")[2];
selectDownThree.addEventListener("click", () => {
  selectDownThree.classList.toggle("rotate");
  document.getElementById("paragraphThree").classList.toggle("app");
});
var selectDownFour = document.getElementsByTagName("select")[3];
selectDownFour.addEventListener("click", () => {
  selectDownFour.classList.toggle("rotate");
  document.getElementById("paragraphFour").classList.toggle("curriculum");
});

submitEmail.addEventListener("click", () => {
  if (doc.value === "") {
    button.style.display = "block";
    pattern.classList.remove("partFive");
    doc.classList.add("e-mail");
  } else {
    button.style.display = "none";
    doc.classList.remove("e-mail");
  }
});
speedy.addEventListener("click", () => {
  bookmark.classList.add("how");
  speedy.style.borderBottom = "3px solid hsl(0deg, 94%, 66%)";
  speedy.style.color = "black";
  simply.style.border = "none";
  simply.style.color = "rgb(173, 171, 171)";
  speeding.style.display = "block";
  easy.style.border = "none";
  easy.style.color = "rgb(173, 171, 171)";
  easyTwo.style.display = "none";
});
simple.addEventListener("click", () => {
  bookmark.classList.remove("how");
  simply.style.borderBottom = "3px solid hsl(0deg, 94%, 66%)";
  simply.style.color = "black";
  speedy.style.border = "none";
  speedy.style.color = "rgb(173, 171, 171)";
  speeding.style.display = "none";
  easy.style.border = "none";
  easy.style.color = "rgb(173, 171, 171)";
  easyTwo.style.display = "none";
});
easy.addEventListener("click", () => {
  bookmark.classList.add("how");
  speeding.style.display = "none";
  easy.style.borderBottom = "3px solid hsl(0deg, 94%, 66%)";
  easy.style.color = "black";
  simply.style.border = "none";
  simply.style.color = "rgb(173, 171, 171)";
  speedy.style.border = "none";
  speedy.style.color = "rgb(173, 171, 171)";
  easyTwo.style.display = "block";
});
