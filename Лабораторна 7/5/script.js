let range = document.querySelector('input')
let result = document.getElementById('result')
let mousedown = false
range.onmousedown = (e) =>{
    let prevPos = 0;
    mousedown = true
    range.onmousemove = (w) =>{
        
        if(mousedown){
            if(range.getAttribute('max') == range.value){
                if(prevPos != 0){
                    result.innerText = `value: ${parseInt(range.value) + w.clientX - prevPos}`
                }
                else{
                    prevPos = w.clientX
                }
            }
            else{
                result.innerText = `value: ${range.value}`
            }
        }
       
    }
    range.onmouseup = (e) =>{
        mousedown = false
    }
}