const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// Получаем строку для функции insertAdjacentHTML и вставляем объекты в ul
// const strimg = images.reduce((acc,image)=> acc+`<li><img src= ${image.url} alt=${image.alt}></li>`,'')
// ulRef.insertAdjacentHTML('beforeend', strimg)
const ulRef = document.querySelector("#gallery")

const createListElement = imgitem => {
  const refLi = document.createElement("li")
  refLi.classList.add("flex-item")
  const refImg = document.createElement("img")
  refImg.setAttribute('src', imgitem.url)
  refImg.setAttribute('alt', imgitem.alt)
  refLi.append(refImg)
  return refLi
};

const listImgRef = images.map(image => createListElement(image))
ulRef.append(...listImgRef)
