let down = false;
let main = document.getElementById('main')
function dows(){
    let blocks = document.getElementsByClassName('block');
    for(let block of blocks){
        block.addEventListener('mousedown',test =>{
            down = true
            let style = getComputedStyle(block)
            let mainStyle = getComputedStyle(main)
            block.addEventListener('mousemove',function test(e){
                if(down){
                    let widt = parseInt(style.width) / 2
                    let height = parseInt(style.height) / 2
                    let posX = parseInt(style.left) + (e.clientX - parseInt(style.left) -widt )
                    let posY = parseInt(style.top) + (e.clientY - parseInt(style.top) - height)
                    if(posX < parseInt(mainStyle.width) - parseInt(style.width) && posY < parseInt(mainStyle.height)-parseInt(style.height) && posX >=0 && posY>=0){
                        block.style.left =`${Math.round(posX)}px`
                        block.style.top = `${Math.round(posY)}px`
                    }
                }
                
            })
        })
        block.addEventListener('mouseup',(test) =>{
            down = false
        })
        
    }
}
dows()

