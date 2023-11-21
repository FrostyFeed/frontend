let btn = document.getElementById('btn')
let input = document.getElementById('input')
let imgs
let imgsROw = document.getElementById('imgsRow')
let displayPic = document.getElementById('displayPic')
let error = document.getElementById('error')
btn.addEventListener('click', () => {
    try{
        imgs = JSON.parse(input.value)
        for (let img of imgs) {
            addImgs(img)
        }
        error.innerText = 'OK'
        error.style.color = 'green'
    }
    catch(test){
        error.innerText = 'Невірний формат JSON'
        error.style.color = 'red'
    }
    
})

function addImgs(imgRef) {
    let imgDiv = document.createElement('div')
    imgDiv.classList.add('img')
    let img = document.createElement('img')
    img.setAttribute('src', imgRef)
    imgDiv.appendChild(img)
    imgDiv.addEventListener('click', () => {
        displayPicture(imgRef)
    })
    imgsROw.appendChild(imgDiv)

}

function displayPicture(img) {
    displayPic.setAttribute('src', img)
}
