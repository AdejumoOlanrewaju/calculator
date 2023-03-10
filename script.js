let numbers = document.querySelectorAll(".value");
let currentOperand = document.querySelector(".current-operand")
let previousOperand = document.querySelector(".previous-operand")
let addition = document.querySelector(".add")
let multiply = document.querySelector(".multiply")
let divide = document.querySelector(".divide")
let subtract = document.querySelector(".minus")
let evaluate = document.getElementById("evaluate")
let value;
let sign = ''
let deletenum = document.querySelector(".delete")
let allClear = document.getElementById("allClear")
let prev;
let curr;

numbers.forEach(num => {
  num.addEventListener("click", () => {
    currentValue = `${currentOperand.innerHTML}${num.innerHTML}`
    currentOperand.textContent = currentValue
  })
})
console.log("hello")


addition.addEventListener("click", () => {
  sign = "+"
  prev  = parseFloat(previousOperand.textContent)
  curr  = parseFloat(currentOperand.textContent)
  let calcVal = prev+curr
  if(previousOperand.textContent !== ""){
    console.log(calcVal)
    currentOperand.textContent = calcVal
  }
  let operation = addition.innerHTML
  changeOperand(operation)
})

multiply.addEventListener("click", () => {
  sign = "*"
  prev  = parseFloat(previousOperand.textContent)
  curr  = parseFloat(currentOperand.textContent)
  let calcVal = prev * curr
  if(previousOperand.textContent !== ""){
    console.log(calcVal)
    currentOperand.textContent = calcVal
  }
  let operation = multiply.innerHTML
  changeOperand(operation)
})

divide.addEventListener("click", () => {
  sign = "/"
  prev  = parseFloat(previousOperand.textContent)
  curr  = parseFloat(currentOperand.textContent)
  let calcVal = prev / curr
  if(previousOperand.textContent !== ""){
    console.log(calcVal)
    currentOperand.textContent = calcVal
  }
  let operation = divide.innerHTML
  changeOperand(operation)
})

subtract.addEventListener("click", () => {
  sign = "-"
  prev  = parseFloat(previousOperand.textContent)
  curr  = parseFloat(currentOperand.textContent)
  let calcVal = prev - curr
  if(previousOperand.textContent !== ""){
    console.log(calcVal)
    currentOperand.textContent = calcVal
  }
  let operation = subtract.innerHTML
  changeOperand(operation)
})

deletenum.addEventListener("click", () => {
  currentOperand.textContent = del()
})

function del(){
  return currentOperand.textContent.slice(0, -1)
}

allClear.addEventListener("click", () => {
  currentOperand.textContent = ""
  previousOperand.textContent = ""
})

function changeOperand(operation){
  previousOperand.textContent = `${currentOperand.textContent} ${operation}`
  currentOperand.textContent = ""
}

evaluate.addEventListener("click", () => {
  if(isNaN(currentOperand.textContent)) return;
  switch(sign){ 
    case  "+" :
      addNum()
      break;
    case "-" :
      subtractNum()
      break;
    case "*" :
      multiplyNum()
      break;  
    case "/" :
      divideNum()
      break;
    default :
    return;
  }
  previousOperand.textContent = ""
  currentOperand.textContent = value
  if(isNaN(currentOperand.textContent)){
    currentOperand.textContent = ""
  }

})

function addNum (){
  prevIndex = previousOperand.textContent.slice(0, -1)
  prev = parseFloat(prevIndex)
  curr = parseFloat(currentOperand.textContent)
  value = prev + curr
}

function multiplyNum (){
  prevIndex = previousOperand.textContent.slice(0, -1)
  let prev = parseFloat(prevIndex)  
  let curr = parseFloat(currentOperand.textContent)
  value = prev * curr
}

function divideNum (){
  prevIndex = previousOperand.textContent.slice(0, -1)
  let prev = parseFloat(previousOperand.textContent)
  let curr = parseFloat(currentOperand.textContent)
  value = prev / curr
}

function subtractNum (){
  prevIndex = previousOperand.textContent.slice(0, -1)
  let prev = parseFloat(prevIndex)
  let curr = parseFloat(currentOperand.textContent)
  value = prev - curr
  console.log(prev)
  console.log(curr)
}

