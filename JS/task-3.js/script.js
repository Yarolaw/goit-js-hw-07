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

const firstItem = document.createElement("li");
firstItem.classList.add("flex-item")

const secondItem = document.createElement("li");
secondItem.classList.add("flex-item")

const thirdItem = document.createElement("li");
thirdItem.classList.add("flex-item")

const firstImage = document.createElement("img");
firstImage.setAttribute("src", "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
firstImage.setAttribute("alt", "White and Black Long Fur Cat")

const secondImage = document.createElement("img");
secondImage.setAttribute("src", "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
secondImage.setAttribute("alt", "Orange and White Koi Fish Near Yellow Koi Fish")

const thirdImage = document.createElement("img");
thirdImage.setAttribute("src", "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")
thirdImage.setAttribute("alt", "Group of Horses Running")

firstItem.appendChild(firstImage)
secondItem.appendChild(secondImage)
thirdItem.appendChild(thirdImage)

const galleryRef = document.querySelector("#gallery");

galleryRef.append(firstItem, secondItem, thirdItem);
galleryRef.classList.add("flex-conteiner");

console.log(galleryRef);

