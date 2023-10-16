let options = document.getElementsByClassName('option')
let selectedOpt = null
for(let option of options){
    option.addEventListener('click',(e) =>{
        if(e.ctrlKey){
            if(option.classList.contains('selected'))
                option.classList.remove('selected')
            else{
                option.classList.add('selected')
            }
        }
        else{
            option.classList.add('selected')
            if(selectedOpt != null){
                selectedOpt.classList.remove('selected')
                
            }
            selectedOpt = option
        }
        
    })
}
document.onkeydown = (e) =>{
    if(e.key == "Ctrl"){
        console.log('ctrl')
    }
}