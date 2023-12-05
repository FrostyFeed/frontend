let hourDiv = document.getElementById('hours')
let minsDiv = document.getElementById('mins')
let secDiv = document.getElementById('sec')
let sec = 0
let mins = 0
let hours = 0
let play = true
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      play = false
    } else {
      play = true
    }
  });

setInterval(function(){
    if(play){
        if(sec == 60){
            if(mins == 60){
                hours++
                mins = 0
                setTime()
            }
            else{
                mins++
                setTime()
            }
            sec = 0
            setTime()
        }
        else{
            sec++
            setTime()
        }
    }
},1000)


function setTime(){
    if(mins < 10){
        minsDiv.innerText = `0${mins}`
    }
    else{
        minsDiv.innerText = `${mins}`
        
    }
    if(hours < 10){
        hourDiv.innerText = `0${hours}`
    }
    else{
        hourDiv.innerText = hours
    }
    if(sec < 10){
        secDiv.innerText = `0${sec}`
    }
    else{
        secDiv.innerText = sec
    }
}

