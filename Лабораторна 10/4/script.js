let colors = document.getElementById('colors')
let drawBtn = document.getElementById('draw')
let filBtn = document.getElementById('fill')
let shapes = document.getElementById('shapes')
class Shape{
    static total =100
    a
    constructor(width){
        this.a = width
        this.showColor()
        drawBtn.addEventListener('click',() =>{
            this.draw()
        })
        filBtn.addEventListener('click',() =>{
            this.fill()
        })
    }
    fill(){
        Shape.total = 100
        this.showColor()
    }
    draw(){
        let shape = document.createElement('div')
        shape.classList.add('shape')
        shape.style.width = `${this.a}px`
        shape.style.height = `${this.a}px`
        shape.style.backgroundColor = `rgba(255,0,0,${( Shape.total) / 100})`
        Shape.total -= 20
        shapes.appendChild(shape)
        this.showColor()
    }
    showColor(){
        let color = document.createElement('div')
        color.classList.add('color')
        color.style.backgroundColor = `rgba(255,0,0,${(Shape.total / 100)})`
        colors.appendChild(color)
    }
}
let shape = new Shape(155)