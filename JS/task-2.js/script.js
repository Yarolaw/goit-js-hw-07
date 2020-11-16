
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulRef = document.querySelector("#ingredients");

const createListFood = ingredient => {
    const newLiRef = document.createElement("li");
    newLiRef.textContent = ingredient;
    return newLiRef
}
const listProdRef = ingredients.map(ingredient => createListFood(ingredient))
ulRef.append(...listProdRef)