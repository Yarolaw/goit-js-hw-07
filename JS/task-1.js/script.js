
const ulRef = document.querySelector("#categories");

Array.from(ulRef.children).forEach((value) => {
    console.dir(`Категория: ${value.firstElementChild.textContent}`)
    console.dir(`Количество елементов: ${value.lastElementChild.children.length}`)
})




