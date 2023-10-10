let text = document.getElementById('text')
let main = document.getElementById('main')
let row = document.createElement('tr')
main.appendChild(row)
function makeTable(){
    let newText = new String(text.value).toString()
    if(newText.endsWith('\n'))
    {
        row = document.createElement('tr')
        main.appendChild(row)
        console.log(`newLie}`)
    }
    if(newText.charAt(newText.length-1) == '1'){
        let cell = document.createElement('td')
        cell.classList.add('one')
        row.appendChild(cell)
        
        console.log('true')
    }
    if(newText.charAt(newText.length-1) == '0'){
        let cell = document.createElement('td')
        cell.classList.add('two')
        row.appendChild(cell)
        console.log('false')
    }
}