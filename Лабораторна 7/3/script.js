let main = document.getElementById('main')
let btn = document.getElementById('btn')
btn.addEventListener('mouseover',(e) =>{
    btn.style.left = `${Math.random() * (200 - 20) + 20}px`
    btn.style.top = `${Math.random() * (220 - 10) + 10}px`
})