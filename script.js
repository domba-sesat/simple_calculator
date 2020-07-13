const calculationValue = document.querySelector('.value');
const calculationOperating = document.querySelector('.operating');

const numbers = document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateValue(currentNumber);
    });
});

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
    }
    calculationOperating.value=symbol;
}

let prevNumber= '';
let currentNumber = '0';
let calculationOperator = '';

const inputNumber= (number)=>{
    if(currentNumber ==='0'){
        currentNumber =number;
    }else{
        currentNumber +=number;
    }
    
};

const operators= document.querySelectorAll('.operator');

operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value);
    });
});

const inputOperator = (operator)=>{
    if(calculationOperator===''){
        prevNumber=currentNumber;
        console.log('llo');
    }else if(calculationOperator!=='' && prevNumber!=='' && currentNumber!==''){
        calculate();
        prevNumber=currentNumber;
        updateValue(currentNumber);
        console.log('qer');
    };
    calculationOperator=operator;
    currentNumber='0';
    updateOperating(operator);
};

const equalSign= document.querySelector('.equal-sign');

equalSign.addEventListener("click",()=>{
    if(currentNumber!==''){
        calculate()
    } else{
        currentNumber=prevNumber;
    };
    updateValue(currentNumber);
    updateOperating(calculationOperator);
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

const clearBtn= document.querySelector('.all-clear');

clearBtn.addEventListener("click",()=>{
    clearAll();
    updateValue(currentNumber);
    updateOperating(calculationOperator);
});

const clearAll= ()=>{
    currentNumber='0';
    prevNumber='';
    calculationOperator='';
};

const decimal= document.querySelector('.decimal');

decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value);
    updateValue(currentNumber);
});

const inputDecimal = (dot)=>{
    currentNumber += dot;
};

const percentage= document.querySelector('.percentage');

percentage.addEventListener('click', ()=>{
    if(prevNumber===''){
        currentNumber = currentNumber/100;
        console.log('lape');
    }else if(calculationOperator!==''){
        currentNumber = prevNumber/100;
        console.log('pale');
        prevNumber='';
        calculationOperator='';
    };
    updateValue(currentNumber);
});
