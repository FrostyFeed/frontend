let imgs = document.getElementsByClassName('image')
for(let img of imgs){
    img.addEventListener('click',()=>{
        if(img.classList.contains('passiveFilter')){
            img.classList.remove('passiveFilter')
            img.classList.add('activeFIlter')
        }
        else{
            img.classList.add('passiveFilter')
        }
    })
}