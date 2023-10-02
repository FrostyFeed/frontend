let input = document.getElementsByTagName('input')
for(let item of input){
    item.addEventListener('focus',()=>{
        item.parentElement.classList.add('active')
    })
    item.addEventListener('focusout',() =>{
        item.parentElement.classList.remove('active')
    })
}
let text = document.getElementsByTagName('textarea')
for(let item of text){
    item.addEventListener('focus',()=>{
        item.parentElement.classList.add('active')
    })
    item.addEventListener('focusout',() =>{
        item.parentElement.classList.remove('active')
    })
}