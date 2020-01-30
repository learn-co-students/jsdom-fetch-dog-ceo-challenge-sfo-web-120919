
document.addEventListener('DOMContentLoaded', function(){
fetchThings("https://dog.ceo/api/breeds/image/random/4", addDogImgs);
fetchThings('https://dog.ceo/api/breeds/list/all', addDogBreeds);
listenForLiClick();
listenForLetterChoice();
})
// function fetchImgs(){
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//     fetch(imgUrl).then(resp => resp.json()).then(dogImgs => addDogsToDOM(dogImgs))
// }

let allBreeds = []


function fetchThings(url, processDataFunction){
    fetch(url).then(resp => resp.json()).then(data => processDataFunction(data))
}

function addDogImgs(dogImgURLs){
    const imgArray = dogImgURLs['message'];
    const dogPicDiv = document.querySelector('#dog-image-container')
    let imgElement;
    imgArray.forEach(img => {
        imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.width = '150';
        imgElement.height = '200';
        dogPicDiv.append(imgElement)
    });
}

function putBreedsInList(breeds) {
    
    const dogBreedsUl = document.getElementById('dog-breeds');
    let breedElement;
    breeds.forEach(breed => {
        breedElement = document.createElement('li');
        breedElement.innerText = breed;
        dogBreedsUl.append(breedElement);
    })
}

function addDogBreeds(breeds){
   
    
   dogBreeds = Object.keys(breeds.message); 
   if (allBreeds.length == 0) {
       allBreeds = [...dogBreeds]
   }

   putBreedsInList(dogBreeds); 
    //debugger
}

function listenForLiClick(){
    const breedUl = document.getElementById('dog-breeds');
    breedUl.addEventListener('click', handleLiClick);
}

function handleLiClick(e) {
    const relevantLi = e.target;
    changeRandomColor(relevantLi);
}

function changeRandomColor(li) {
    const colors = ['red', 'blue', 'green', 'pink', 'purple', 'brown'];
    const randomNumber = Math.floor(Math.random() * 6); 
    const randomColor = colors[randomNumber]
    li.style.color = randomColor;
}

function listenForLetterChoice(){
    const dropdown = document.getElementById('breed-dropdown');
    dropdown.addEventListener('change', function(e){
        filterBreeds(dropdown.value)
    })
   
}

function filterBreeds(letter) {
    console.log('hello')
    //debugger
    let filteredDogs;
    if (letter !== "None") {
     filteredDogs = allBreeds.filter(dog => (dog[0] === letter))
    } else {
     filteredDogs = allBreeds.map(dog => dog);
    }
    
    const dogUl = document.getElementById('dog-breeds');
    dogUl.innerHTML = '';
    //debugger
    putBreedsInList(filteredDogs);
    //debugger

}



