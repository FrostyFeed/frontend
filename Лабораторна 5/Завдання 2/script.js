let text = ' '
let boxes = document.getElementsByTagName('input')
for(let element of boxes){
    element.addEventListener('click',() =>{
        if(element.checked){
            text = text.concat(`${element.nextElementSibling.innerText}; `)
            changeText()
        }
        else{
            text = text.replace(`${element.nextElementSibling.innerText}; `,' ')
            changeText()
        }
    })
}
let div = document.getElementById('text')
function changeText(){
    div.innerText = text;
}


