let hour = document.getElementById('hours')
let mins = document.getElementById('mins')
let time = document.getElementById('time')
setTime()
let timer = setInterval(() =>setTime(),6000 )
function setTime(){
    let date = new Date()
    hour.innerText = `${date.getHours()}:`
    mins.innerText = date.getMinutes()
}