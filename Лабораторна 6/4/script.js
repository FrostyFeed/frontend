
let count = 1;
let focused = true;
for(let i =1;i<4;i++){
    let edit = document.getElementById(`edit${i}`)
    let deleteBtn = document.getElementById(`delete${i}`)
    let text = document.getElementById(`text${i}`)
    let block = document.getElementById(`${i}`)
    edit.addEventListener('click',() =>{
        if(!focused){
            text.removeAttribute('readonly')
            text.focus()
            text.classList.add('focus')
            focused = true;
        }
        else{
            text.setAttribute('readonly',true)
            text.classList.remove('focus')
            focused = false
        }
        console.log(focused)
    })
    deleteBtn.addEventListener('click',() =>{
        block.remove()
    })
    
}
function editText(){
    let text = document.getElementById(`text${count}`)
    if(!focused){
        
        text.removeAttribute('readonly')
        text.focus()
        text.classList.add('focus')
        focused = true;
    }
    else{
        text.setAttribute('readonly',true)
        text.classList.remove('focus')
        focused = false
    }
}
function deleteBlock(){
    let block = document.getElementById(`${count}`)
    block.remove()
}