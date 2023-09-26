function table(m,n){
    let div = document.createElement('div');
    let table = document.createElement('table');
    div.appendChild(table);
    for(let i = 0;i<m;i++){
        let line = document.createElement('tr');
        for(let a =0;a<n;a++){
            line.appendChild(document.createElement('td'));
        }
        table.appendChild(line);
    }
    console.log(div);
    div.appendChild(table);
    const currentDiv = document.getElementsByClassName('div1');
    document.body.appendChild(div);
}

table(5,2);
function createInputText(a,s,d){
    let input = document.createElement('input');
    input.setAttribute('type',`${a}`);
    input.setAttribute('name',`${s}`);
    let label = document.createElement('label');
    label.innerText = `${s}`;
    label.setAttribute('for',`${s}`);
    d.appendChild(label);
    d.appendChild(input);
}
function createRadio(a,b){
    let radio = document.createElement('input');
    radio.setAttribute('type','radio');
    radio.setAttribute('name','gender');
    radio.setAttribute('id',`${a}`);
    b.appendChild(radio);
}
function createInputRadio(a){
    let label1 = document.createElement('label');
    label1.innerText = 'Gender';
    a.appendChild(label1);
    createRadio('M',a);
    let label2 = document.createElement('label');
    label2.innerText = 'Male';
    label2.setAttribute('for','M');
    a.appendChild(label2);
    createRadio('F',a);
    let label3 = document.createElement('label');
    label3.innerText = 'Female';
    label3.setAttribute('for','F');
    a.appendChild(label3);
}
function createList(a){
    let cityinput = document.createElement('select');
    cityinput.setAttribute('multiple','');
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    let option3 = document.createElement('option');
    option1.innerText= 'Житомир';
    option2.innerText= 'Київ';
    option3.innerText= 'Львів';
    cityinput.appendChild(option1);
    cityinput.appendChild(option2); 
    cityinput.appendChild(option3); 
    a.appendChild(cityinput);
}
function createInputList(a){
    let labelCity = document.createElement('label');
    labelCity.setAttribute('for','city');
    labelCity.innerText= 'city';
    a.appendChild(labelCity);
    createList(a);
}
function createCheckBOx(a,b){
    let inputCheckBox1 = document.createElement('input');
    inputCheckBox1.setAttribute('type','checkbox');
    inputCheckBox1.setAttribute('name',`${a}`);
    let labelOp1 = document.createElement('label');
    labelOp1.setAttribute('for',`${a}`);
    labelOp1.innerText = `${a}`;
    b.appendChild(inputCheckBox1);
    b.appendChild(labelOp1);
}
function createInterestList(a){
    let labelIntereset = document.createElement('label');
    labelIntereset.innerText = 'Interest';
    a.appendChild(labelIntereset);
    createCheckBOx('football',a);
    createCheckBOx('chess',a);
    createCheckBOx('art',a);
    createCheckBOx('music',a);
}
function createBtn(a){
    let buttonRes = document.createElement('input');
    buttonRes.setAttribute('type','reset');
    buttonRes.setAttribute('value','Reset');
    let buttonSub = document.createElement('input');
    buttonSub.setAttribute('type','submit');
    buttonSub.setAttribute('value','Submit');
    a.appendChild(buttonRes);
    a.appendChild(buttonSub);
}
function form(){
    let div = document.createElement('div');
    let form = document.createElement('form');
    let divLog = document.createElement('div');
    createInputText('text','login',divLog);
    form.appendChild(divLog);
    let divPass = document.createElement('div');
    createInputText('password','password',divPass);
    form.appendChild(divPass);
    let divPassRep = document.createElement('div');
    createInputText('password','RepeatPassword',divPassRep);
    form.appendChild(divPassRep);
    let divGen = document.createElement('div');
    createInputRadio(divGen);
    form.appendChild(divGen);
    let divCity = document.createElement('div');
    createInputList(divCity);
    form.appendChild(divCity);
    let divint = document.createElement('div');
    createInterestList(divint);
    form.appendChild(divint)
    let divBtn = document.createElement('div');
    createBtn(divBtn);
    form.appendChild(divBtn)
    div.appendChild(form);
    document.body.appendChild(div);
}

form();


function createText(a,b,c){
    let label = document.createElement('p');
    label.innerText = `${c}`;
    let div = document.createElement('div')
    div.innerText = 'rqweadqweqdsad';
    div.style.display = 'none';
    div.style.paddingTop = '15px'
    div.style.borderTop = '1px solid black';
    a.appendChild(label)
    a.appendChild(div);
    a.addEventListener('click', () => {
        let next = label.nextElementSibling;
        if(next.style.display == 'none'){
            next.style.display = "block";
        }
        
        else{
            next.style.display = 'none';
        }

    })
    b.appendChild(a)
}
function navigation(){
    let divMain = document.createElement('div');
    let divOpt1 = document.createElement('section');
    let divOpt2 = document.createElement('section');
    let divOpt3 = document.createElement('section');
    let divOpt4 = document.createElement('section');
    let divOpt5 = document.createElement('section');
    createText(divOpt1,divMain,'Accordion Menu Using HTMl');
    createText(divOpt2,divMain,'Accordion Using Pure CSS');
    createText(divOpt3,divMain,'Accordion Menu using Javascript');
    createText(divOpt4,divMain,'Accordion Bar With Jquery');
    createText(divOpt5,divMain,'Accordion Bar using Bootstrap 5');
    document.body.appendChild(divMain)
}
navigation()
