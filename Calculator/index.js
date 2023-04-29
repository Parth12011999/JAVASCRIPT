class Calculator {
    constructor(previousOperandDiv, currentOperandDiv){
        this.previousOperandDiv = previousOperandDiv
        this.currentOperandDiv = currentOperandDiv
    }

    clear(){
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }

    delete(){
        
    }

    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString()
        // this.currentOperand = number
    }

    chooseOperatiom(operation){

    }

    compute(){

    }
    
    updateDisplay(){
        this.currentOperandDiv.innerText = this.currentOperand
    }
}


const numButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-all-clear]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandDiv = document.querySelector('[data-previous-operand]')
const currentOperandDiv = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandDiv, currentOperandDiv)

numButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})