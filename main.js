let num1 = 0;
let num2 = 0;
let operand = "";


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

const result = document.querySelector('#result')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const btn6 = document.querySelector('#btn6')
const btn7 = document.querySelector('#btn7')
const btn8 = document.querySelector('#btn8')
const btn9 = document.querySelector('#btn9')
const btn10 = document.querySelector('#btn10')
const btn11 = document.querySelector('#btn11')
const btn12 = document.querySelector('#btn12')
const btn13 = document.querySelector('#btn13')
const btn14 = document.querySelector('#btn14')
const btn15 = document.querySelector('#btn15')
const btn16 = document.querySelector('#btn16')
const btn17 = document.querySelector('#btn17')
const btn18 = document.querySelector('#btn18')
const btn19 = document.querySelector('#btn19')
const btn20 = document.querySelector('#btn20')

btn19.addEventListener('click', () => {
    result.textContent = "Daria nu are caine lol xD"
})