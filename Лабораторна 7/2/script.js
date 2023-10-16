let main = document.getElementById('main')
let circles = []
for(let i =0;i<20;i++){
    let circle = document.createElement('div')
    let width = Math.random() * (60-20) + 20;
    circle.style.width = `${width}px`
    circle.style.height = `${width}px`
    circle.style.borderRadius = '50%'
    circle.style.backgroundColor = "red"
    circle.style.position = "absolute"
    circle.style.left = `${Math.random() * (1500 - 10) + 10}px`
    circle.style.top = `${Math.random() * (700 - 10) + 10}px`
    circles.push(circle)
    main.appendChild(circle)
}
circles[0].classList.add('active')
let activeCircle = 0;
document.onkeydown = (e) =>{
    if(e.key == 'Tab'){
        circles[activeCircle].classList.remove('active')
        activeCircle++
        circles[activeCircle].classList.add('active')
        e.preventDefault();
        e.stopPropagation();
    }
}