let blocks = document.getElementsByClassName('block')
let styleB = getComputedStyle(document.querySelector('body'))

let directions = []
let blockNumber = -1
for(let block of blocks){
    block.style.left = `${Math.floor(Math.random() * (window.innerWidth - 0) + 0)}px`
    block.style.top = `${Math.floor(Math.random() * (window.innerHeight - 0) + 0)}px`
    let toRight = true
    let toBottom = true
    directions.push(toRight)
    directions.push(toBottom)
    setInterval(() =>{
        moveBlock(block,parseInt(block.innerText))
    },1)
    blockNumber +=2
}
function moveBlock(block,blockNumber){
    let style = getComputedStyle(block)
    let left = parseInt(style.left)
    let top = parseInt(style.top)
    let rec = block.getBoundingClientRect()
    if(rec.x + rec.width <= window.innerWidth){
        if(rec.x < 0){
            directions[blockNumber] = true
        }
        if(directions[blockNumber]){
            block.style.left = `${++left}px`
        }
        else{
            block.style.left = `${--left}px`
        }
    }
    else{
        directions[blockNumber] = false;
        block.style.left = `${--left}px`
    }
    if(rec.y + rec.height <= window.innerHeight){
        if(rec.y <0 ){
            directions[blockNumber + 1] = true
        }
        if(directions[blockNumber + 1]){
            block.style.top = `${++top}px`
        }
        else{
            block.style.top = `${--top}px`
        }
    }
    else{
        directions[blockNumber + 1] = false
        block.style.top = `${--top}px`
    }
}