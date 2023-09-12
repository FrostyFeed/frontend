
document.querySelector('body').style.fontFamily = 'Arial';
let first = document.querySelector('div:nth-child(1)');
first.style = "color: orange; background-color: yellow; font-size: 16px; padding: 5px;text-align:center;";
let second = document.querySelector('div:nth-child(2)');

second.style = "color: blue; background-color: lightblue; font-size: 14px; padding: 5px;text-align:right;";
let third = document.querySelector('div:nth-child(3)');

third.style = "color: red; background-color: #E55451; font-size: 12px; padding: 5px;text-align:left;";
let cells = document.querySelectorAll("th");
for(let i = 0; i < cells.length;i++){
    if(i % 2 == 0){
        cells[i].classList.add("selected");
    }
}
let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`;

console.log(text[12] + text[6] + text[18] + text[25]);

console.log(text.toLocaleLowerCase())
console.log(text.indexOf("in"))
console.log(text.split(" "))
console.log(text.split('').reverse().join(''))

function ucFirst(txt) {
    let newTxt = txt;
    return newTxt[0].toUpperCase() + newTxt.slice(1);
 }
 console.log(ucFirst("vest") );
 

