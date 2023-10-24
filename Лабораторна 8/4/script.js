let blocks = document.getElementsByClassName('block')
let styleB = getComputedStyle(document.querySelector('body'))
let toRight = true
let down = true
for(let block of blocks){
    let rand = Math.floor(Math.random() * 2)
    let style = getComputedStyle(block)
    let timer1 = setInterval(() =>{
        let startX = parseInt(style.left)
        //startX += Math.random(2);
        let startY = parseInt(style.top)
        let recy = block.getBoundingClientRect()
        if(toRight ){
            if(recy.x + recy.width >= window.innerWidth){
                
                toRight = false;
            }
            else{
                if(rand == 0){
                    block.style.left = `${parseInt(style.left) + Math.floor(Math.random() * 2)}px`;
                }
                else{
                    block.style.right = `${parseInt(style.right) + Math.floor(Math.random() * 2)}px`
                }
                
                console.log(startX)
            }
        }
        else{
            if(recy.x != 0){
                block.style.left = `${parseInt(style.left - Math.floor(Math.random() * 2))}px`;
                block.style.right = `${parseInt(style.right) - Math.floor(Math.random() * 2)}`
            }
            else{
                toRight = true
            }
        }
        if(down){
            if(recy.y + recy.height >= window.innerHeight ){
                down = false;
            }
            else{
                if(rand == 0){
                    block.style.bottom = `${parseInt(style.bottom) + Math.floor(Math.random() * 2)}px`
                }
                else{
                    block.style.top = `${parseInt(style.top) + Math.floor(Math.random() * 2)}px`
                }
                
                
            }
        }
        else{
            if(recy.y != 0){
                block.style.top = `${parseInt(style.top) + Math.floor(Math.random() * 2)}px`
                block.style.bottom = `${parseInt(style.bottom) + Math.floor(Math.random() * 2)}px`
            }
            else{
                down = true
            }
        }
        
        //block.style.top = `${Math.random()*(1-(-1)) -1}px`;
        //console.log(window.screen.height)
        //console.log(window.screen.width)
    },5)
}