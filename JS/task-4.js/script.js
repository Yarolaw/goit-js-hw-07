const counterValue = document.querySelector("#value");
console.dir(counterValue);

const increment = function () {
    counterValue.textContent = parseInt(counterValue.textContent) + 1;
}

const decrement = function () {
    counterValue.textContent = parseInt(counterValue.textContent) - 1;
}

const decrementBtn = document.querySelector("button[data-action=decrement]")
const incrementBtn = document.querySelector("button[data-action=increment]")

incrementBtn.addEventListener("click", increment)
decrementBtn.addEventListener("click", decrement)
 
