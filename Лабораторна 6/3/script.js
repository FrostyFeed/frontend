let cells = document.getElementsByTagName('td')

let main = document.getElementById('block')

let colors = ['white']

for(let item of cells){
    item.addEventListener('click',()=>{
        if(colors.includes(item.innerText)){
            if(colors.length > 2){
                colors.splice(colors.findIndex(color => color ==item.innerText),1)
                main.style.background = `linear-gradient(${colors.toString()})`;
                
            }
            else{
                
                colors.pop()
                main.style.background = `${colors[0]}`
                
            }
          
            item.classList.remove('selected')
        }
        else{
            colors.push(item.innerText)
            if(colors.length > 1){
                main.style.background = `linear-gradient(${colors.toString()})`;
                
                item.classList.add('selected')
            }
            else{
                main.style.background = `${item.innerText}`;
                item.classList.add('selected')
            }
            
            
        }
        
        
    })
}
