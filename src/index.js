console.log('%c HI', 'color: firebrick')

let breedArr = []

document.addEventListener("DOMContentLoaded",function (){

fetchdogs();
fetchBreeds();
changeFontColor();
filterbreeds();

// const bodyTag = document.getElementsByName('body');
// bodyTag.

});

// Use the fetch command to get the data from api

function fetchdogs()
{
    console.log('going to fetch')
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => {
        console.log('it works');
        return resp.json();
    })
    .then(dogpics => getdog(dogpics) )

}

// add images to DOM

function getdog(dogpics)
{   
   // console.log(dogpics)
    const imageContainer = document.getElementById("dog-image-container");
    const doggiesUl = document.createElement("ul")
    imageContainer.appendChild(doggiesUl)

    dogpics['message'].forEach(dog => {
        const doggiesLi = document.createElement("li")
        const imgTag = document.createElement("img")
        imgTag.setAttribute('src',dog)
        imgTag.setAttribute('height',"200px")
        imgTag.setAttribute('width',"200px")
        doggiesLi.appendChild(imgTag)
        doggiesUl.appendChild(doggiesLi)
        })

    
}

//challenge #2

// fetch breed URL
function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp =>{
        console.log('here we are')
        return resp.json()
    })
    .then(breeds => {
        getBreed(breeds)}) 

}

// Add breeds to the page
function getBreed (breeds){
    // console.log(breeds)
    const breedUl = document.getElementById('dog-breeds')
    
   
    for(let breed in breeds['message']) {
        breedArr.push(breed)
        const breedLi = document.createElement('li'); 
        breedLi.textContent = breed; 
        breedUl.appendChild(breedLi)
    }
   
}

//Challenge 3...change color of an li background on clicking
 function changeFontColor() {
  // add event listener to parent of li (ul)

  const breedUl = document.getElementById('dog-breeds');
//on click, change style.fontColor = 'red';
  breedUl.addEventListener('click',function(e){
    e.target.style.color = 'red'
  })
 }

function filterbreeds()
 {
    const selectedLetter = document.getElementById("breed-dropdown"); 
    selectedLetter.addEventListener('change',search);
 }
function search(event)
{
    // console.log(event.target.value)
    // console.log("Got the letter!")
    const letter = event.target.value;
    let breedUl = document.getElementById('dog-breeds');
    breedUl.innerHTML = '';
    debugger
    breedArr.forEach(breed => { 
        if (breed.startsWith(letter))
        {
            console.log(breed)
            const liTag = document.createElement("li")
            liTag.textContent = breed
            breedUl.appendChild(liTag)
        }
        })
}