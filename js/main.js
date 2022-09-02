//Required abilities of a calculator:
//accept user inputs of number, operator, and number
//should accept decimal numbers
//store inputs
//recognize inputs and perform calculations
//reutrn a result

//Optional features:
//Should accept longer arithmetic operations
//display all input as it is being entered
//store previous total as start of next operation
//clear button should clear all entries
//should prevent invalid inputs (operators next to each other)

const keys = document.querySelector('.calculator-buttons');
    keys.addEventListener('click', event => {
        const {target} = event;
        const {value} = target;
        if(!target.matches('button')){
            return;
        }else{
            calculator.parseInput(value)
            //console.log(value)
        }
    })

    const calculator = {
        displayText: '0',
        prevTotal: null,
        parseInput(value){
            
        }
    }
