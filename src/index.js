

console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function(){
    fetchDog();
    fetchBreed();
    changeColor();
    dropDown();
})
function fetchDog() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json() )
    .then(doggie => renderDoggie(doggie));
}
function renderDoggie(doggie) {
    const dogContainer = document.getElementById("dog-image-container");
    const dogImage = document.createElement('img');
    doggie.message.forEach(dog => {
    dogImage.setAttribute('src',dog);
    dogContainer.appendChild(dogImage);
});
}
function fetchBreed(letter=null) {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(breed => renderBreed(breed, letter));
}
function renderBreed(breed, letter=null){
    let dogUlTag = document.getElementById("dog-breeds");
    let dogLiTag;
    let breedArr = Object.keys(breed.message)
    if (letter !== null) {
        dogUlTag.innerHTML = ""
        breedArr = breedArr.filter(breed => breed[0] === letter )
    }
    // if this function is called with a letter, dont iterate over all the breeds, just the letter breeds 
    breedArr.forEach(dogBreed => {
        dogLiTag = document.createElement("li");
        dogLiTag.innerHTML = dogBreed;
        dogUlTag.appendChild(dogLiTag);
        });
}
function dropDown() {
    let drop = document.getElementById("breed-dropdown");
    drop.addEventListener("change", function(){
        if (drop.value === 'a') {
            fetchBreed('a');
        }
        if (drop.value === 'b') {
            fetchBreed('b');
        }
        if (drop.value === 'c') {
            fetchBreed('c');
        }
        if (drop.value === 'd'){
            fetchBreed('d');
        }
        if (drop.value === 'all'){ 
            fetchBreed();
        }
    });
}
function changeColor(){
    let dogUlTag = document.getElementById("dog-breeds");
    dogUlTag.addEventListener("click", function(event){
        event.target.style.color = "red"
    });
}
