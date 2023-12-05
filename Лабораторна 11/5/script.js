let latitude = document.getElementById('latitude')
let longitude = document.getElementById('longitude')
navigator.geolocation.getCurrentPosition(succes,error)
let currentLatitude
let currentLongitide
function succes(position){
    if(position.coords.latitude != currentLatitude){
        latitude.innerText = `Широта: ${position.coords.latitude}`
        currentLatitude = position.coords.latitude
    }
    if(position.coords.longitude != currentLongitide){
        longitude.innerText = `Довгота: ${position.coords.longitude}`
        currentLongitide = position.coords.longitude
    }
}

function error(){
    alert('error')
}
setInterval(function(){
    navigator.geolocation.getCurrentPosition(succes,error)
},5000)
  