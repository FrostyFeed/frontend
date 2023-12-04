let wrapper = document.querySelector('.wrapper')
class Form{
    fields = []
   constructor(){
    this.createForm()
   }
   createForm(){
    let formDiv = document.createElement('div')
    formDiv.classList.add('form')
    let form = document.createElement('form')
    this.createRows(form)
    formDiv.appendChild(form)
    wrapper.appendChild(formDiv)
   }
   createRows(form){
    let inputs = document.createElement('div')
    inputs.classList.add('inputs')
    this.addRow(inputs,'Name','text')
    this.addRow(inputs,'Password','password')
    this.addRow(inputs,'Repeat password','password')
    this.addRow(inputs,'Email','email')
    this.addBtnRow(inputs)
    form.appendChild(inputs)
   }
   addRow(div,text,inputType){
    let row = document.createElement('div')
    row.classList.add('row')
    let textFiled = document.createElement('div')
    textFiled.innerText = text
    this.fields.push(text)
    textFiled.classList.add('text')
    let inputDIv = document.createElement('div')
    inputDIv.classList.add('input')
    let input = document.createElement('input')
    input.setAttribute('type',inputType)
    this.fields.push(input)
    inputDIv.appendChild(input)
    row.appendChild(textFiled)
    row.appendChild(inputDIv)
    div.appendChild(row)
    this.addErrorRow(div)
   }
   addErrorRow(div){
    let errorRow = document.createElement('div')
    errorRow.classList.add('errorRow')
    this.fields.push(errorRow)
    div.appendChild(errorRow)
   }
   addBtnRow(div){
    let btnRow = document.createElement('div')
    btnRow.classList.add('buttonRow')
    let btn = document.createElement('button')
    btn.setAttribute('type','button')
    btn.innerText = 'Send'
    btnRow.appendChild(btn)
    btn.addEventListener('click',() =>{
        if(this.validation()){
            this.sendData()
        }
    })
    div.appendChild(btnRow)
   }
   sendData(){
    console.log(`Name: ${this.fields[1].value}`)
    console.log(`Password: ${this.fields[4].value}`)
    console.log(`Email: ${this.fields[10].value}`)
   }
   validation(){
    let checked = true
    if(!this.checkName)
        checked = false
    if(!this.checkPasswordLength() || !this.checkIfPasswordsAreSame())
        checked = false
    if(!this.checkIfAllFieldsFiled())
        checked = false
    return checked
   }
   checkName(){
    if(this.fields[1].value.length < 5){
        this.showError('Мінімум 6 символів',this.fields[2])
        return false
    }
    else{
        return true
    }
   }
   checkPasswordLength(){
    if(this.fields[4].value.length < 7){
        this.showError('Мінімум 8 символів',this.fields[5])
        return false
    }
    else{
        return true
    }
   }
   checkIfPasswordsAreSame(){
    if(this.fields[4].value != this.fields[7].value){
        this.showError('Паролі повинні бути однакові',this.fields[8])
        return false
    }
    else{
        return true
    }
   }
   checkIfAllFieldsFiled(){
    let check = true
    if(this.fields[1].value == ''){
        this.showError('Заповніть поле',this.fields[2])
        check = false
    }
    if(this.fields[4].value == ''){
        this.showError('Заповніть поле',this.fields[5])
        check = false
    }
    if(this.fields[7].value == ''){
        this.showError('Заповніть поле',this.fields[8])
        check = false
    }
    if(this.fields[10].value == ''){
        this.showError('Заповніть поле',this.fields[11])
        check = false
    }
    return check
   }
   showError(text,filed){
    filed.innerText = text
    filed.style.display = 'block'
   }
}
let form = new Form()
let form2 = new Form()

