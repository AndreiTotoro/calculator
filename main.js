let calcButtons = [
    {
        type: "operand",
        display: "(",
        value: "(",
    },
    {
        type: "operand",
        display: ")",
        value: ")",
    },
    {
        type: "operand",
        display: "%",
        value: "%",
    },
    {
        type: "clear",
        display: "AC",
        value: "clear",
    },
    {
        type: "number",
        display: "7",
        value: "7",
    },
    {
        type: "number",
        display: "8",
        value: "8",
    },
    {
        type: "number",
        display: "9",
        value: "9",
    },
    {
        type: "operand",
        display: ":",
        value: "/",
    },
    {
        type: "number",
        display: "4",
        value: "4",
    },
    {
        type: "number",
        display: "5",
        value: "5",
    },
    {
        type: "number",
        display: "6",
        value: "6",
    },
    {
        type: "operand",
        display: "x",
        value: "*",
    },
    {
        type: "number",
        display: "1",
        value: "1",
    },
    {
        type: "number",
        display: "2",
        value: "2",
    },
    {
        type: "number",
        display: "3",
        value: "3",
    },
    {
        type: "operand",
        display: "-",
        value: "-",
    },
    {
        type: "number",
        display: "0",
        value: "0",
    },
    {
        type: "dot",
        display: ".",
        value: ".",
    },
    {
        type: "equal",
        display: "=",
        value: "=",
    },
    {
        type: "operand",
        display: "+",
        value: "+",
    },
];

let results = {
    equation: "",
    current: "",
    previous: "",
}


function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}

function operate(operator, num1, num2){
    return operator(num1, num2)
}

const container = document.querySelector('#container')
const resultForm = document.createElement('h1')


calcButtons.forEach((obj) => {
   let btns = document.createElement('button')
   container.appendChild(btns)
   
   btns.textContent = obj.display
   btns.classList.add('buttons')

    if (obj.type == "number"){
        btns.classList.add("number")
        btns.addEventListener('click', () => {
            results.current += obj.value
            results.equation += obj.value
            resultForm.textContent = results.equation
        })
    } else if (obj.type == "operand"){
        btns.classList.add('operands')
        btns.addEventListener('click', () => {
            results.previous = results.current
            results.current = "";
            if (results.equation == ""){
                results.equation = `${results.previous}`
                resultForm.textContent = results.equation
            }
            results.equation = `${results.equation} ${obj.value} ${results.current}`
            resultForm.textContent = results.equation
        })
    } else if (obj.type == "equal"){
        btns.classList.add('equal')
        btns.addEventListener('click', () => {
            resultForm.textContent = eval(results.equation)    
            results.current = eval(results.equation)
            results.equation = ""
            
        })
    } else if (obj.type == "clear"){
        btns.classList.add('operands')
        btns.addEventListener('click', () => {
            results.current = "";
            results.previous = "";
            results.equation = "";
            resultForm.textContent = results.equation
        })
    } else if (obj.type == "dot"){
        btns.classList.add('operands')
        btns.addEventListener('click', () => {
            results.current += "."
            results.equation += "."
            resultForm.textContent = results.equation   
        })
    }

    

})

container.appendChild(resultForm)
resultForm.classList.add('result')
