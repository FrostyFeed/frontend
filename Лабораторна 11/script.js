let btn = document.getElementById('addBtn')
let dog = document.getElementById('dogs')
let hourDiv = document.getElementById('hours')
let minsDiv = document.getElementById('mins')
let secDiv = document.getElementById('sec')
let sec = 0
let mins = 0
let hours = 0
async function logMovies() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogs = await response.json();
    addNewDog(dogs.message)
}

function addNewDog(dogImg){
    let img = document.createElement('img')
    img.setAttribute('src',dogImg)
    dog.appendChild(img)
}

btn.addEventListener('click',() =>{
    logMovies()
})

function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      document.body.style.backgroundColor = 'red'
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      document.body.style.backgroundColor = 'white'
    }
}
setInterval(timer(),1000)


function timer(){
    if(sec == 60){
        if(mins == 60){
            hours++
            mins = 0
        }
        else{
            mins++
        }
        sec = 0
    }
    else{
        sec++
    }
    setTime()
}

function setTime(){
    if(mins == 10){
        minsDiv.innerText = `0${mins}`
    }
    else{
        console.log(minsDiv)
        minsDiv.innerText = `${mins}`
        
    }
    if(hours == 10){
        hourDiv.innerText = `0${hours}`
    }
    else{
        hourDiv.innerText = hours
    }
    if(sec == 10){
        secDiv.innerText = `0${sec}`
    }
    else{
        secDiv.innerText = sec
    }
}
timer()

  