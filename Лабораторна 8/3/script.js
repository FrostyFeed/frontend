let current = 0
let wrapper = document.getElementById('wrapper')
let timer = setInterval(() => {
    current -= 250
    wrapper.style.transform = `translateX(${current}px)`
},5000)