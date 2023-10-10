let card = document.getElementsByClassName('thecard')
for(let ca of card){
    ca.addEventListener('click',() =>{
        if(ca.style.transform != 'rotateY(180deg)'){
            ca.style.transform = 'rotateY(180deg)'
        }
        else{
            ca.style.transform = 'rotateY(0deg)'
        }
    })
}
