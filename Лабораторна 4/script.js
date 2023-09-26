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

table(4,3);

function form(){
    let div = document.createElement('div');
    let form = document.createElement('form');
    let inputLogin = document.createElement('input');
    let divLog = document.createElement('div');
    inputLogin.setAttribute('type','text');
    inputLogin.setAttribute('name','login');
    let label = document.createElement('label');
    label.setAttribute('for','login');
    label.innerText= 'логін';
    divLog.appendChild(label);
    divLog.appendChild(inputLogin);
    form.appendChild(divLog);
    let inputPass = document.createElement('input');
    let labelPass = document.createElement('label');
    let divPass = document.createElement('div');
    inputPass.setAttribute('type','password');
    inputPass.setAttribute('name','password');
    labelPass.setAttribute('for','password');
    labelPass.innerText= 'пароль';
    divPass.appendChild(labelPass);
    divPass.appendChild(inputPass);
    form.appendChild(divPass);
    let inputPassRep = document.createElement('input');
    let labelPassRep = document.createElement('label');
    let divPassRep = document.createElement('div');
    inputPassRep.setAttribute('type','password');
    inputPassRep.setAttribute('name','password');
    labelPassRep.setAttribute('for','password');
    labelPassRep.innerText= 'повторіть пароль';
    divPassRep.appendChild(labelPassRep);
    divPassRep.appendChild(inputPassRep);
    form.appendChild(divPassRep);
    let gender1 = document.createElement('input');
    let gender2 = document.createElement('input');
    let labelGender = document.createElement('label');
    let labelM = document.createElement('label');
    let labelF = document.createElement('label');
    let divGen = document.createElement('div');
    gender1.setAttribute('type','radio');
    gender1.setAttribute('name','gender');
    gender1.setAttribute('id','M');
    gender2.setAttribute('id','F');
    gender2.setAttribute('type','radio');
    gender2.setAttribute('name','gender');
    labelGender.setAttribute('for','gender');
    labelGender.innerText= 'стать';
    labelM.setAttribute('for','M');
    labelM.innerText= 'male';
    labelF.setAttribute('for','F');
    labelF.innerText= 'female';
    divGen.appendChild(labelGender);
    divGen.appendChild(gender1);
    divGen.appendChild(labelM);
    divGen.appendChild(gender2);
    divGen.appendChild(labelF);
    form.appendChild(divGen);
    let labelCity = document.createElement('label');
    let cityinput = document.createElement('select');
    let divCity = document.createElement('div');
    cityinput.setAttribute('name','city');
    cityinput.setAttribute('multiple','');
    labelCity.setAttribute('for','city');
    labelCity.innerText= 'city';
    let option1 = document.createElement('option');
    option1.innerText= 'Житомир';
    cityinput.appendChild(option1);   
    let option2 = document.createElement('option');
    option2.innerText= 'Київ';
    cityinput.appendChild(option1);
    let option3 = document.createElement('option');
    option3.innerText= 'Львів';
    cityinput.appendChild(option1);
    cityinput.appendChild(option2); 
    cityinput.appendChild(option3); 
    divCity.appendChild(labelCity);
    divCity.appendChild(cityinput)
    form.appendChild(divCity);
    let labelIntereset = document.createElement('label');
    let divint = document.createElement('div');
    labelIntereset.innerText = 'Interest';
    let inputCheckBox1 = document.createElement('input');
    inputCheckBox1.setAttribute('type','checkbox');
    inputCheckBox1.setAttribute('name','football');
    let labelOp1 = document.createElement('label');
    labelOp1.setAttribute('for','football')
    labelOp1.innerText = 'football'
    
    divint.appendChild(labelIntereset)
    divint.appendChild(inputCheckBox1)
    divint.appendChild(labelOp1)
    
    
    let inputCheckBox2 = document.createElement('input');
    
    inputCheckBox2.setAttribute('type','checkbox');
    inputCheckBox2.setAttribute('name','chess');
    let labelOp2 = document.createElement('label');
    labelOp2.setAttribute('for','chess')
    labelOp2.innerText = 'chess'
    divint.appendChild(inputCheckBox2)
    divint.appendChild(labelOp2)
    
    let inputCheckBox3 = document.createElement('input');
    inputCheckBox3.setAttribute('type','checkbox');
    inputCheckBox3.setAttribute('name','painting');
    let labelOp3 = document.createElement('label');
    labelOp3.setAttribute('for','painting')
    labelOp3.innerText = 'painting'
    divint.appendChild(inputCheckBox3)
    divint.appendChild(labelOp3)
    
    let inputCheckBox4 = document.createElement('input');
    inputCheckBox4.setAttribute('type','checkbox');
    inputCheckBox4.setAttribute('name','music');
    let labelOp4 = document.createElement('label');
    labelOp4.setAttribute('for','music')
    labelOp4.innerText = 'music'
    divint.appendChild(inputCheckBox4)
    divint.appendChild(labelOp4)
    
    form.appendChild(divint)
    let divBtn = document.createElement('div');
    let buttonRes = document.createElement('input');
    buttonRes.setAttribute('type','reset');
    buttonRes.setAttribute('value','Reset');
    divBtn.appendChild(buttonRes)
    
    let buttonSub = document.createElement('input');
    buttonSub.setAttribute('type','submit');
    buttonSub.setAttribute('value','Submit');
    divBtn.appendChild(buttonSub)
    form.appendChild(divBtn)
    console.log(div)
    div.appendChild(form);
    document.body.appendChild(div);
}

form();


function navigation(){
    let divMain = document.createElement('div');
    let divOpt1 = document.createElement('section');
    let divOpt2 = document.createElement('section');
    let divOpt3 = document.createElement('section');
    let divOpt4 = document.createElement('section');
    let divOpt5 = document.createElement('section');
    let label = document.createElement('p');
    label.innerText = 'Accordion Menu Using HTMl';
    divOpt1.appendChild(label)
    divMain.appendChild(divOpt1)
    let label2 = document.createElement('p');
    label2.innerText = 'Accordion Using Pure CSS';
    divOpt2.appendChild(label2)
    divMain.appendChild(divOpt2)
    let label3 = document.createElement('p');
    label3.innerText = 'Accordion Menu Using JavaScript';
    divOpt3.appendChild(label3)
    divMain.appendChild(divOpt3)
    let label4 = document.createElement('p');
    label4.innerText = 'Accordion Bar With Jquery';
    divOpt4.appendChild(label4)
    divMain.appendChild(divOpt4)
    let label5 = document.createElement('p');
    label5.innerText = 'Accordion Bar using Bootstrap 5';
    divOpt5.appendChild(label5)
    divMain.appendChild(divOpt5)
    document.body.appendChild(divMain)
}
navigation()
