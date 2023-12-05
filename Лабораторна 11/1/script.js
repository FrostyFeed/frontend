
let dog = document.getElementById('dogs')
let dogsArr = []
async function logMovies() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogs = await response.json();
    addNewDog(dogs.message)
    dogsArr.push(dogs.message)
}

function addNewDog(dogImg){
    let img = document.createElement('img')
    img.setAttribute('src',dogImg)
    dog.appendChild(img)
}



function toggleFullScreen() {
    if (!document.fullscreenElement) {
      dog.requestFullscreen();
      dog.style.backgroundColor = 'red'
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      dog.style.backgroundColor = 'white'
    }
}

window.addEventListener('load',() =>{
    loadDogs()
})
window.addEventListener('beforeunload',() =>{
    if(dogsArr.length != 0){
        localStorage.setItem('dogs',dogsArr)
    }
})

function loadDogs(){
    let dogs = localStorage.getItem('dogs')
    let dogsArr = dogs.split(',')
    if(dogsArr.length != 0){
        for(let dog of dogsArr){
            addNewDog(dog)
        }
    }
}
  