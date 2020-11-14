
const calcCategoryRef = document.querySelectorAll("li.item").length;
console.log(`В списке ${calcCategoryRef} категории.`);

const titleRef = document.querySelectorAll("h2");
console.log(`Категория: ${titleRef[0].textContent}`);
 
console.log(`Количество елементов: ${titleRef[0].nextElementSibling.children.length}`);

console.log(`Категория: ${titleRef[1].textContent}`);
 
console.log(`Количество елементов: ${titleRef[1].nextElementSibling.children.length}`);

console.log(`Категория: ${titleRef[2].textContent}`);
 
console.log(`Количество елементов: ${titleRef[2].nextElementSibling.children.length}`);



