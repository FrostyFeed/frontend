let table = document.getElementById('main')
let firstName = document.getElementById('firstName')
let lastName = document.getElementById('lastName')
let count = 0;
function addRow(){
    let tr = document.createElement('tr')
    let number = document.createElement('td')
    number.innerText = ++count
    let first = document.createElement('td')
    first.innerText = firstName.value;
    let last = document.createElement('td')
    last.innerText = lastName.value;
    tr.appendChild(number)
    tr.appendChild(first)
    tr.appendChild(last)
    table.appendChild(tr)
}
