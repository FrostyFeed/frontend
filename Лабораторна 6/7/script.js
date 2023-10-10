let nameField = document.getElementById('name')
let comment = document.getElementById('comment')
let body = document.querySelector('body')
function addComment(){
    let main = document.createElement('div')
    main.classList.add('main')
    let top = document.createElement('div')
    top.classList.add('top')
    console.log(main)
    main.appendChild(top)
    let nameDiv = document.createElement('div')
    nameDiv.classList.add('nickname')
    nameDiv.innerText = `${nameField.value}`
    let dateDiv = document.createElement('div')
    dateDiv.classList.add('date')
    dateDiv.innerText = getTodayDate()
    let commentDiv = document.createElement('div')
    commentDiv.classList.add('text')
    commentDiv.innerText = `${comment.value}`
    top.appendChild(nameDiv)
    top.appendChild(dateDiv)
    main.appendChild(commentDiv)
    console.log(main)
    body.appendChild(main)
}
function getTodayDate(){
    let dateObj = new Date().toUTCString();
    let time = new Date()
    let timeStamp = time
    return dateObj
}