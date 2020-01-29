console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

const dogImgContainer = document.getElementById("dog-image-container")
const dogBreedContainer = document.getElementById("dog-breeds")
const dogBreedDropdown = document.getElementById("breed-dropdown")


const fetchImg = () => {
  fetch(imgUrl)
  .then (res => res.json())
  .then (json => {
    json.message.forEach(img => {
      
    dogImgContainer.innerHTML += `<ul> <img src="${img}"/> </ul>`
      
    })
  })
}
fetchImg()

let allBreeds = [];

function fetchBreed() {
  fetch(breedUrl)
  .then(res => res.json())
  .then (json => {
    for (const key in json.message){
      dogBreedContainer.innerHTML += `<ul><li>${key}</li></ul>`
      allBreeds.push(key)
    }
    // console.log(allBreeds);
    
  })
}
fetchBreed()


function colorChange() {
    dogBreedContainer.addEventListener('click', function(e) {
    e.preventDefault()

    e.target.style.color = 'blue';

    })
}
colorChange()

function selectLetter() {
  //only doesnt work if you dont change initial letter
  dogBreedDropdown.addEventListener('change', function(e){
   const filteredBreeds = allBreeds.filter(name =>
      name.startsWith(e.target.value)
   )
   console.log(filteredBreeds)
      dogBreedContainer.innerHTML = "";
     filteredBreeds.forEach(dog => 
      dogBreedContainer.innerHTML += `<ul><li>${dog}</li></ul>`)
  }) 
}
selectLetter()

//.forEach(dog => `<ul>${dog}</ul>`)