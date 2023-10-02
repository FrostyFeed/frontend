function clickFucntion(){
    let ukr = document.getElementById('Ukrainian')
    let eng = document.getElementById('English')
    let spn = document.getElementById('Spanish')
    let textP = document.getElementById('text')
    let text = ' '
    if(spn.checked)
        text = text.concat(' sp')
    if(eng.checked)
        text = text.concat(' eng')
    if(ukr.checked)
        text = text.concat(' ukr')
    textP.innerText = text;
    console.log(textP)
}
