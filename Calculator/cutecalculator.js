// CALCULATOR CLASS

class Calculator {
  constructor(writespace, resultspace) {
    this.writespace = writespace
    this.resultspace = resultspace
    this.clear()
  }

  clear() {
    this.resultspace = ''
    this.writespace = ''
    this.operation = undefined
  }

  delete() {
    this.resultspace = this.resultspace.toString().slice(0, -1)
  }

  appendNum(number) {
    if (number === '.' && this.resultspace.includes('.')) return
    this.resultspace = this.resultspace.toString() + number.toString()
  }

  chooseOperator(operator) {
    if (this.resultspace === '') return
    if (this.writespace !== '') {
      this.compute()
    }
    this.operator = operator
    this.writespace = this.resultspace + operator
    this.resultspace = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.writespace)
    const current = parseFloat(this.resultspace)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operator) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break

      case 'x':
        computation = prev * current
        break

      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.resultspace = computation
    this.operation = undefined
    this.writespace = ''
  }

  updateResult() {
    resultspace.innerHTML = this.resultspace
    writespace.innerHTML = this.writespace
  }
}

// VARIABLES TO TAKE THINGS FROM HTML
const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operator]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delet]')
const deleteallButton = document.querySelector('[data-deletall]')
const writespace = document.querySelector('[data-write]')
const resultspace = document.querySelector('[data-result]')

// MAIN

const calculator = new Calculator(writespace, resultspace)

numberButton.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNum(button.innerHTML)
    calculator.updateResult()
  })
})

operationButton.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperator(button.innerHTML)
    calculator.updateResult()
  })
})

equalButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateResult()
})

deleteallButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateResult()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateResult()
})

//LJ
