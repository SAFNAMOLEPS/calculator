
// 1. display number on the text field

function displayNum(num){
    result.value+=num
}

// 2. clear the text field

function clearText(){
    result.value="" // it will assign empty value to the text field
}

// 3. evaluate the expression

function evaluateExpression(){
    result.value=eval(result.value) // eval()- default method in js for performing calculations
        //exp=result.value    exp=5*7
        //output=eval(result.value)     35=eval(5*7)
        //result.value=output
}

// 4. remove the last character from the textfield

function removeLastCharacter(){
    result.value=result.value.slice(0,-1)
}
