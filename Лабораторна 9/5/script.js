let tabs = document.querySelector('.tabs')
let contentBlock = document.querySelector('.content')
let selectedTab
class Tab{
    tab 
    content 
    constructor(tabName,content){
        this.createNewTab(tabName)
        this.createContent(content)
        this.addNewTab(this.tab)
        this.checkIfItsFirstTab()
            
    }

    checkIfItsFirstTab(){
        if(selectedTab == null){
            selectedTab = this.tab
            this.changeContent(this.content)
            this.tab.classList.add('selected')
        }
    }

    createNewTab(tabName){
        this.tab = document.createElement('div')
        this.tab.innerText = tabName
        this.tab.classList.add('tab')
        this.tab.addEventListener('click',() =>{
            this.openThisTab()
            selectedTab.classList.remove('selected')
            selectedTab = this.tab
        })
    }

    createContent(content){
        let text =document.createElement('div')
        text.innerHTML = content
        this.content = text
    }
    addNewTab(tab){
        tabs.appendChild(tab)
    }
    changeContent(content){
        contentBlock.innerHTML = ''
        contentBlock.appendChild(content)
    }

    openThisTab(){
        this.tab.classList.add('selected')
        this.changeContent(this.content)
    }
}

let tab = new Tab('Tab 2','random text')
let tab2 = new Tab('tab 3','daskdcoqwdsalkwqjakscjdlwqkas')