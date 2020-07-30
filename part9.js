// SPECIAL MULTIPLY
const specialMultiply = num1 => {
    return function secondFunc(num2){
        return num1 * num2
    }
}

console.log(specialMultiply(2)(2))