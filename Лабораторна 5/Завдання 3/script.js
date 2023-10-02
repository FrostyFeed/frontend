let questions = ['3*5','5*5','3*9','4*8']
let options = [['14','10','15','16'],['20','23','25','30'],['24','21','28','27'],['30','33','34','32']]
let answers = ['15','25','27','32']
let question = document.getElementById('question')
let radio = document.getElementsByTagName('input')
let result = document.getElementById('result')
let answer = document.getElementById('answer')
let rightAnswers = 0
let currentQuestion = 0
question.innerText = questions[currentQuestion];
for(let i=0;i<questions.length;i++){
    radio[i].nextElementSibling.innerText = options[currentQuestion][i]
}
for(let item of radio){
    item.addEventListener('click',() =>{
        if(item.nextElementSibling.innerText == answers[currentQuestion]){
            answer.innerText = "Pravilno"
            rightAnswers++
            result.innerText = (` Загальний рахунок ${(rightAnswers * 100) / 4}% (${rightAnswers} правильних відповідей з ${questions.length})`)
        }
        else{
            answer.innerText = `Помилка, правильна відповідь ${answers[currentQuestion]}`
        }
    })
}
function nextQuestion(){
    currentQuestion++;
    for(let i=0;i<questions.length;i++){
        radio[i].nextElementSibling.innerText = options[currentQuestion][i];
        question.innerText = questions[currentQuestion];
    }
}
