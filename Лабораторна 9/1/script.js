let modalWindow = document.getElementById('windowWrapper')
let isDown = false
let offset = [0,0]
let mousePosition = [0,0]
class ModalWindow{
    constructor(){
        let btn = document.getElementById('closeBtn')
        btn.addEventListener('click',() =>{
            this.closeWindow()
        })
        this.addMoveAbility()
    }
    openWindow(){
        modalWindow.style.visibility = 'visible'
    }
    closeWindow(){
        modalWindow.style.visibility = 'hidden'
    }
    changeContent(text){
        let textBlock = document.getElementById('content')
        textBlock.innerText = text
    }
    addMoveAbility(){
        let move = document.getElementById('move')
        let windowW = document.getElementById('window')
        move.addEventListener('mousedown',(x) =>{
            isDown = true
            offset[0] = windowW.offsetLeft - x.clientX
            offset[1] = windowW.offsetTop - x.clientY
        })
        move.addEventListener('mouseup',() =>{
            isDown = false
        })
        move.addEventListener('mousemove',(x)=>{
            x.preventDefault()
            if(isDown){
                mousePosition[0] = x.clientX
                mousePosition[1] = x.clientY
                windowW.style.left = (mousePosition[0] + offset[0]) + 'px'
                windowW.style.top = (mousePosition[1] + offset[1]) + 'px'
            }
        })
    }
}
let newWindow = new ModalWindow()
newWindow.openWindow()

