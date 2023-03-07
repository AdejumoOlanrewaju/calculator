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

function displayNumbers(){
  numbers.forEach(num => {
    num.addEventListener("click", () => {
      let currentValue
      currentValue = `${currentOperand.innerHTML}${num.innerHTML}`
      currentOperand.textContent = currentValue
    })
  })
  console.log("hello")
}
displayNumbers()

addition.addEventListener("click", () => {
  let operation = addition.innerHTML
  changeOperand(operation)
  sign = "+"
 
})

multiply.addEventListener("click", () => {
  let operation = multiply.innerHTML
  changeOperand(operation)
  sign = "*"
})

divide.addEventListener("click", () => {
  let operation = divide.innerHTML
  changeOperand(operation)
  sign = "/"
})

subtract.addEventListener("click", () => {
  let operation = subtract.innerHTML
  changeOperand(operation)
  sign = "-"
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
  }
  previousOperand.textContent = ""
  currentOperand.textContent = value
  console.log( value)
})

function addNum (){
  prevIndex = previousOperand.textContent.slice(0, -1)
  let prev = parseFloat(prevIndex)
  console.log(prev)
  let curr = parseFloat(currentOperand.textContent)
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

// addition.addEventListener("click", () => {
//   let val1 = previousOperand.textContent.slice(0, -1)
//   let val2 = currentOperand.textContent
//   console.log(parseInt(val1 + val2))
// })