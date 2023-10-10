let colorsTable = document.getElementById('first')
let colorsCells = colorsTable.getElementsByTagName('td')
let selectedColor = '0';
let prevColor;
console.log(colorsCells)
for(let color of colorsCells){
    color.addEventListener('click',()=>{
        if(selectedColor != '0'){
            prevColor.classList.remove('selected')
            prevColor = color
            selectedColor = color.innerText
            color.classList.add('selected')
            prevColor = color;
        }
        else{
            prevColor = color
            selectedColor = color.innerText
            color.classList.add('selected')
            prevColor = color;
        }
       
    })
}
let secondTable = document.getElementById('second')
let secondTableCells = secondTable.getElementsByTagName('td')
for(let cell of secondTableCells){
    cell.addEventListener('click',() =>{
        cell.style.backgroundColor = `${selectedColor}`
    })
}