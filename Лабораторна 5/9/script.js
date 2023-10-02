let br = document.getElementById('br')
let sh = document.getElementById('sh')
let tf = document.getElementById('tf')
let sr = document.getElementById('sr')
let buttons = document.getElementsByTagName('button')
    
function order(a){
    if(a == 'br')
        br.innerText = `${parseInt(br.innerText) + 1}`
    if(a == 'sh')
        sh.innerText = `${parseInt(sh.innerText) + 1}`
    if(a == 'tf')
        tf.innerText = `${parseInt(tf.innerText) + 1}`
    if(a == 'sr')
        sr.innerText = `${parseInt(sr.innerText) + 1}`
}
