class Student{
    name
    lastName
    mathGrade
    historyGrade
    jsGrade
    constructor(n,l,m,h,j){
        this.name = n
        this.lastName = l
        this.mathGrade = m
        this.historyGrade = h
        this.jsGrade = j
    }
}

class ListOfStudents{
    listOfStudents
    
    constructor(students){
        this.listOfStudents = students
    }
    getTableList(){
        let table = document.createElement('table')
        let firstRow = document.createElement('tr')
        this.creatHeadCell(firstRow,"Name")
        this.creatHeadCell(firstRow,'LastName')
        this.creatHeadCell(firstRow,'Math')
        this.creatHeadCell(firstRow,'History')
        this.creatHeadCell(firstRow,'JS')
        table.appendChild(firstRow)
        this.createRecords(table)
        document.body.appendChild(table)
        return table
    }

    creatHeadCell(row,text){
        let cell = document.createElement('td')
        cell.classList.add('head')
        cell.innerText = text
        row.appendChild(cell)
    }
    createRecords(table){
        for(let student of this.listOfStudents){
            let row = document.createElement('tr')
            this.createCell(row,student.name)
            this.createCell(row,student.lastName)
            this.createCell(row,student.mathGrade)
            this.createCell(row,student.historyGrade)
            this.createCell(row,student.jsGrade)
            table.appendChild(row)
        }
    }
    createCell(row,text){
        let cell  =document.createElement('td')
        cell.innerText = text
        row.appendChild(cell)
    }
}

let student1 = new Student('Vlad','Neferey',3,4,5)
let student2 = new Student('Sasha','Neferey',3,2,4)
let listOfStudents = new ListOfStudents([student1,student2])
listOfStudents.getTableList()

class StylesTable extends ListOfStudents{
    constructor(students){
        super(students)
    }
    getStyles(){
        let style = document.createElement('style')
        style.innerText = ' table {border:  1px solid black; color: green;} td {border: 1px solid black;} .head{background-color: green;color: white;}'
        return style
    }
    getTableList(){
        let table = super.getTableList()
        document.head.appendChild(this.getStyles())
        
    }
}
let stylesTable = new StylesTable([student1,student2])
stylesTable.getTableList()