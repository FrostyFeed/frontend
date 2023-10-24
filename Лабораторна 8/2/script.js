let active = false
let body = document.querySelector('body')
for(let i=0;i<3;i++){
    let timerInterval
    let date = new Date()
    let timer = document.createElement('div')
    timer.classList.add('timer')
    let time = document.createElement('div')
    time.classList.add('time')
    let hours = document.createElement('div')
    hours.innerText = `${date.getHours()}`
    let mins = document.createElement('div')
    mins.innerText = `${date.getMinutes()}`
    let sec = document.createElement('div')
    sec.innerText = `${date.getSeconds()}`
    time.appendChild(hours)
    time.appendChild(mins)
    time.appendChild(sec)
    let btns = document.createElement('div')
    let stopBtn = document.createElement('button')
    stopBtn.innerText = 'Стоп'
    stopBtn.addEventListener('click',() => clearInterval(timerInterval))
    let startBtn = document.createElement('button')
    startBtn.innerText = 'Старт'
    startBtn.addEventListener('click',() => timerInterval = setInterval(() => count(hours,mins,sec),5))
    let dropBtn = document.createElement('button')
    dropBtn.addEventListener('click',() => {
        hours.innerText = date.getHours()
        mins.innerText = date.getMinutes()
        sec.innerText = date.getSeconds()
    })
    dropBtn.innerText = 'Скидання'
    btns.appendChild(startBtn)
    btns.appendChild(stopBtn)
    btns.appendChild(dropBtn)
    timer.appendChild(time)
    timer.appendChild(btns)
    body.appendChild(timer)
}

function stop(){
    active = false;
}

function count(hour,min,sec){
    let hours = parseInt(hour.innerText)
    let mins = parseInt(min.innerText)
    let secs = parseInt(sec.innerText)
    if(secs != 0){
        sec.innerText = --secs;
    }
    else{
        sec.innerText = '59'
        if(mins != 0){
            min.innerText = --mins;
        }
        else{
            min.innerText = '59'
            if(hours != 0){
                hour.innerText = --hours
            }
            else{
                return
            }
        }
    }
}

