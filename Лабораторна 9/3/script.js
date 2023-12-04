class Table{
    constructor(array){
        this.createTable(array)
    }
    createTable(array){
        let table = document.createElement('table')
        this.createRows(table,array)
        document.body.appendChild(table)
    }

    createRows(table,array){
        for(let i=0;i<array.length;i++){
            let row = document.createElement('tr')
            this.createCells(row,array[i])
            table.appendChild(row)
        }
    }

    createCells(row,array){
        for(let i =0;i<array.length;i++){
            let cell = document.createElement('td')
            cell.innerText = array[i]
            row.appendChild(cell)
        }
    }
}
let table = new Table(
    [
        [1,2,3,4,5],
        [2],
        [3,4,5]
    ]
    )