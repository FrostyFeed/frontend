let block = document.getElementById('block')
let width = document.getElementById('width')
let height = document.getElementById('height')
let rotate = document.getElementById('rotate')
let inputs = document.getElementsByTagName('input')
function changeWidth(){
    block.style.width = `${width.value}px`
}
function changeHeight(){
    block.style.height = `${height.value}px`
}
function rotateBlock(){
    block.style.transform = `rotate(${rotate.value}deg)`
}
for(let item of inputs){
    item.addEventListener('input',() =>{
        item.nextElementSibling.nextElementSibling.innerText = item.value
    })
}