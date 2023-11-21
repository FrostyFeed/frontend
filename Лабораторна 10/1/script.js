let text= document.getElementById('text')
let check = document.querySelectorAll('#check')
let checbtns = [0,0,0]
let textArea = document.getElementById('area')
let radio = document.querySelectorAll('#radio')
let radios = [0,0,0]
let pass = document.getElementById('pass')
window.addEventListener('load',() =>{
    text.value = localStorage.getItem('text')
    loadCheckBoxes()
    setCheckBoxes()
    setTextArea()
    setRadio()
    pass.value = localStorage.getItem('pass')
})
window.addEventListener('beforeunload',() =>{
    localStorage.setItem('text',text.value)
    localStorage.setItem('pass',pass.value)
    loadCheckBoxes()
    loadTextAre()
    loadRadio()
})
function loadCheckBoxes(){
    for(let i =0;i<3;i++){
        if(check[i].checked)
            checbtns[i] = 1
        else{
            checbtns[i] = 0
        }
    }
    localStorage.setItem('checkboxes',checbtns)
}
function setCheckBoxes(){
    for(let i =0;i<3;i++){
        if(checbtns[i] == 1)
            check[i].checked = true
        else{
            check[i].checked = false
        }
    }
}
function loadTextAre(){
    localStorage.setItem('textarea',textArea.value)
}
function setTextArea() {
    textArea.value = localStorage.getItem('textarea')
}
function loadRadio(){
    for(let i =0;i<3;i++){
        if(radio[i].checked)
            radios[i] = 1
        else{
            radios[i] = 0
        }
    }
    localStorage.setItem('checkboxes',checbtns)
}
function setRadio(){
    for(let i =0;i<3;i++){
        if(radio[i] == 1)
            radios[i].checked = true
        else{
            radios[i].checked = false
        }
    }
}