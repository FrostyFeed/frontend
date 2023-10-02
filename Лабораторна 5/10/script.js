
let slider = document.getElementById('slider')
let currentImg = 0
let style = getComputedStyle(slider)
function next(){
    slider.style.transform = `translateX(-${currentImg + 20}%)`
    currentImg+= 20
    
}
function prev(){
    slider.style.transform = `translateX(-${currentImg - 20}%)`
    currentImg -= 20
}