let arr = [];
document.querySelectorAll("p").forEach((element)=>arr.push(element.innerText.length));
console.log(arr); // завдання 1.1

let arr2 = [20, 17, 4, -4, 10, -9, 13, 4, 12, 22, 13, 19, 1, 3]; // завдання 1.2
let oddCount = 0;
let evenCount = 0;
let max = 0;
let min = 0;
let twoNumberCount = 0;
let pos = 0;
let negat = 0;
arr2.forEach((element) =>{
    if(element > max)
        max = element; // max number
    if(element < min)
        min = element; // min number
    if(element % 2 == 0 )
        evenCount++; // Парні числа
    else{
        oddCount++; // Непарні числа
    }
    if(element.toString().length == 2 && !element.toString().includes('-'))
        twoNumberCount++; // Числа з двох цифр
    if(element >= 0)
        pos++; // Додатні числа
    else{
        negat++; //Від'ємні числа
    }
})
console.log(max);
console.log(min);
console.log(`Парні ${evenCount} Непарні ${oddCount}`)
console.log (`Два числа ${twoNumberCount}`);
console.log(`Додатні ${pos} Від'ємні ${negat}`)

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1; // Сортування масива
}
console.log(arr2.sort(compareNumeric));
console.log(arr2.reverse()); // Обернений масив
let table = document.querySelectorAll(".table"); // Завдання 2 
table.forEach((element)=>{
    let td = element.querySelectorAll("td");
    addClass(td);})
function addClass(td){ // Додання класу до кожноної другої клітинки
    for(let i =0;i<td.length;i++){
        if(i % 2 != 0){
            td[i].classList.add('selected')
        }
    }
}

let matrix = [
    [-5,2,0,10],
    [5,12,-5,25],
    [1,12,23,23],
    [-5,-10,-25,50],
    [12,-10,-55,30]
]
let pos2 = 0;
let rowsWithoutZero = 0;
let columnsWithZero = [];
let longestSequence = [0,0];
let string = "";

for(let i =0;i<matrix.length;i++){
    let product = 1;
    let sequenceCount = 0;
    if(!matrix[i].includes(0)) // Рядки без нулів
        rowsWithoutZero++;
    for(let a = 0;a<matrix[i].length;a++){
        if(matrix[i][a] >= 0 && product >= 0) // добуток елементів в тих рядках, які не містять від’ємних елементів
            product *= matrix[i][a];
        else{
            product = -1;
        }
        if(matrix[i][a] >= 0) // Додатні числа
            pos2++;
        if(matrix[i][a] == 0 && !columnsWithZero.includes(a)) // Рядки з нулями
            columnsWithZero.push(a);
        for(let b = a+1;b<matrix[i].length;b++){ // Найдовша послідовнісь однакових елементів
            if(matrix[i][a] == matrix[i][b])
                sequenceCount++;
        }
    }
    if(sequenceCount > longestSequence[1]){ // Запис номера рядка з найдовшою послідовністю однакових символів
        longestSequence[0] = i+1;
        longestSequence[1] = sequenceCount;
    }
    if(product != -1){
        string += ` Рядок ${i+1} добуток чисел ${product} \n`;
    }
}
console.log(pos2)
console.log(rowsWithoutZero)
console.log(columnsWithZero.length);
console.log(longestSequence[0])
console.log(string)
let string2 = '';
let string3 = '';
for(let i = 0;i<matrix.length;i++){
    let hasNegative = false;
    let summary = 0;
    let summary2 = 0;
    for(let a = 0 ;a<matrix[i].length;a++){
        if(matrix[a][i] >= 0 && summary >= 0 ){
            summary+=matrix[a][i]; // суму елементів в тих стовпцях, які не містять від’ємних елементів
            summary2+=matrix[a][i]; // суму елементів в тих стовпцях, які  містять хоча б один від’ємний елемент
        }
        else{
            summary = -1;
            summary2+=matrix[a][i];
            hasNegative = true;
        }
        
    }
    if(summary != -1)
        string2 += `Стовпчик ${i+1} сума чисел ${summary} \n`;
    if(hasNegative)
        string3 += `Стовпчик ${i+1} сума чисел ${summary2} \n`;
}
console.log(string2);
console.log(string3);
for(let i =0;i<matrix.length;i++){ // транспонованa матриця
    for(let a =i;a<matrix.length;a++){
        let temp = matrix[i][a];
        matrix[i][a] = matrix[a][i];
        matrix[a][i] = temp;
    }
}
console.log(matrix)

