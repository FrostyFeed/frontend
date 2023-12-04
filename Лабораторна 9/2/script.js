
let wrapper = document.getElementById('wrapper')
class Slider{
    slider = document.querySelector('.slider')
    sliderIsHorizontal = true
    currentWidth = 500
    maxRangeValue = 1250
    constructor(){
        this.createHorizontalSlider()
    }
    createHorizontalSlider(){
        if(!this.sliderIsHorizontal){
            this.slider.style.position = 'relative'
            this.slider.style.left = '0px'
            this.slider.style.top = '0px'
            this.slider.style.transform = 'none'
            this.sliderIsHorizontal = true
        }
        this.addHorizontalRotation()
    }
    createVerticalSlider(){
        if(this.sliderIsHorizontal){
            this.slider.style.position = 'absolute'
            this.slider.style.left = '150px'
            this.slider.style.top = '120px'
            this.slider.style.transform = 'rotate(90deg)'
            this.sliderIsHorizontal = false
            this.addVerticalRotation()
        }
    }
    addHorizontalRotation(){
        wrapper.setAttribute
        wrapper.style.flexDirection = 'row'
        document.forms['form']['range'].addEventListener('input',() =>{
            wrapper.style.transform = `translateX(${-document.forms['form']['range'].value}px)`
        })
    }
    addVerticalRotation(){
        wrapper.style.height = '500%'
        wrapper.style.flexDirection = 'column'
        document.forms['form']['range'].addEventListener('input',() =>{
            wrapper.style.transform = `translateY(${-document.forms['form']['range'].value}px)`
        })
    }
    addNewSlide(color){
        let slide = document.createElement('div')
        this.changeMaxRangeValue()
        this.changeWrapperWidth()
        slide.classList.add('slide')
        slide.style.backgroundColor = color
        wrapper.appendChild(slide)
    }
    changeMaxRangeValue(){
        this.maxRangeValue += 250
        document.forms['form']['range'].setAttribute('max',this.maxRangeValue)
    }
    changeWrapperWidth(){
        this.currentWidth += 100
        wrapper.style.width = `${this.currentWidth}%`
    }
}
let slider = new Slider()
slider.addNewSlide('black')
slider.addNewSlide('yellow')
slider.addNewSlide('pink')
