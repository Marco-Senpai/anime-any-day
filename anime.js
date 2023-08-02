const button = document.getElementById("btn");
console.log(button.id, button.className, button.innerHTML);

const resetButton = () => {
  button.innerHTML = "Hajime mashita!";
  button.className = "button button1";
}

const clickHandler = () => {
  button.innerHTML = "Sugoi!";
  button.className = "button button1";
  setTimeout(resetButton, 1000);
 
}

button.addEventListener("click", clickHandler);

