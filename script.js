const calculationValue = document.querySelector('.value');
const calculationOperating = document.querySelector('.operating');

const operators= document.querySelectorAll('.operator');

const numbers = document.querySelectorAll(".number");

const clearBtn= document.querySelector('.all-clear');

const decimal= document.querySelector('.decimal');

const percentage= document.querySelector('.percentage');

const equalSign= document.querySelector('.equal-sign');

let prevNumber= '';
let currentNumber = '0';
let calculationOperator = '';

const updateValue = (number)=>{
    calculationValue.value=number;
};

const updateOperating = (operate)=>{
    let symbol = '';
    switch(operate){
        case "*":
            symbol="x";
            break;
        case "/":
            symbol="/";
            break;
        case "+":
            symbol="+";
            break;
        case "-":
            symbol="-";
            break;
        default:
            symbol="";
            break;
    };
    calculationOperating.value=symbol;
};

const inputOperator = (operator)=>{
    if(calculationOperator===''){
        prevNumber=currentNumber;
    }else if(calculationOperator!=='' && prevNumber!=='' && currentNumber!==''){
        calculate();
        prevNumber=currentNumber;
        updateValue(currentNumber);
    };
    calculationOperator=operator;
    currentNumber='0';
    updateOperating(operator);
};

const inputNumber= (number)=>{
    if(currentNumber ==='0'){
        currentNumber =number;
    }else{
        currentNumber +=number;
    }
    
};

const inputDecimal = (dot)=>{
    currentNumber += dot;
};

decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value);
    updateValue(currentNumber);
});

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateValue(currentNumber);
    });
});

operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value);
    });
});

equalSign.addEventListener("click",()=>{
    if(currentNumber!==''){
        calculate()
    } else{
        currentNumber = prevNumber;
    };
    updateValue(currentNumber);
    updateOperating(calculationOperator);
});

clearBtn.addEventListener("click",()=>{
    clearAll();
    updateValue(currentNumber);
    updateOperating(calculationOperator);
});

percentage.addEventListener('click', ()=>{
    if(prevNumber===''){
        currentNumber = currentNumber/100;
    }else if(calculationOperator!==''){
        currentNumber = prevNumber/100;
        prevNumber='';
        calculationOperator='';
        updateOperating(calculationOperator);
    };
    updateValue(currentNumber);
});

const calculate = ()=>{
    let result = '';
    switch(calculationOperator){
        case "+":
            result= (parseFloat(prevNumber)*10 + parseFloat(currentNumber)*10)/10;
            console.log('tambah');
            break;
        case "-":
            result= (prevNumber*10 - currentNumber*10)/10;
            console.log('kurang');
            break;
        case "*":
            result = (prevNumber*10 * currentNumber*10)/100;
            console.log('kali');
            break;
        case "/":
            result = prevNumber / currentNumber;
            console.log('bagi');
            break;
        default:
            console.log('');
            result = currentNumber;
            break;
    };
    currentNumber = result;
    calculationOperator = '';
};

const clearAll= ()=>{
    currentNumber='0';
    prevNumber='';
    calculationOperator='';
};
