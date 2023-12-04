let nots = document.getElementById('nots')
class Notification{
    notification
    constructor(text){
        this.createNotification(text)
    }

    createNotification(text){
        this.notification = document.createElement('div')
        this.notification.classList.add('not')
        this.addText(this.notification,text)
        this.addCloseBtn(this.notification)
        nots.appendChild(this.notification)
    }
    addText(not,text){
        let textSection = document.createElement('div')
        textSection.classList.add('text')
        textSection.innerText = text
        not.appendChild(textSection)
    }
    addCloseBtn(not){
        let closeBtn = document.createElement('button')
        closeBtn.classList.add('closeBtn')
        closeBtn.innerText = 'X'
        this.addCloseEvent(closeBtn)
        not.appendChild(closeBtn)
    }

    addCloseEvent(btn){
        btn.addEventListener('click',() =>{
            nots.removeChild(this.notification)
        })
    }
}

let notification = new Notification('tesxtesdasd')