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
    current: 0,
    previous: 0,
    total: 0
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
    } else if (obj.type == "operand" || obj.type == "dot" || obj.type == "clear"){
        btns.classList.add('operand')
    } else if (obj.type == "equal"){
        btns.classList.add('equal')
    }

    btns.addEventListener('click', () => {
        console.log(obj.value)
    })

})

container.appendChild(resultForm)

resultForm.textContent = results.current
resultForm.classList.add('result')
