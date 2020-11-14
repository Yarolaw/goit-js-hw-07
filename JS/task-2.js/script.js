const potatoItem = document.createElement("li")
potatoItem.textContent = "Картошка"

const mushItem = document.createElement("li")
mushItem.textContent = "Грибы"

const garlicItem = document.createElement("li")
garlicItem.textContent = "Чеснок"

const tomatoItem = document.createElement("li")
tomatoItem.textContent = "Помидоры"

const greensItem = document.createElement("li")
greensItem.textContent = "Зелень"

const condimentsItem = document.createElement("li")
condimentsItem.textContent = "Приправы"

const ingredientsList = document.querySelector("#ingredients")

ingredientsList.append(potatoItem, mushItem, garlicItem, tomatoItem, greensItem, condimentsItem)

console.log(ingredientsList);