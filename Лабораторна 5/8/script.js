let img = document.getElementById('img')
let style = getComputedStyle(img)
let firstClickCheck = true
function btnClick(){
    if(firstClickCheck){
        img.style.width = `${parseInt(style.width) * 2}px`
        img.style.height = `${parseInt(style.height) *2}px`
        firstClickCheck = false;
    }
    else{
        img.style.width = `${parseInt(style.width) / 2}px`
        img.style.height = `${parseInt(style.height) / 2}px`
        firstClickCheck = true;
    }
    
}