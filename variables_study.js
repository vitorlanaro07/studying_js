//block scope
//let is a variable block scope
{
    let testeLet='Eu sou um let';
    var testVar= 'Eu sou uma var';
    console.log(testVar, '\n',testeLet)
}

try {
    console.log(testeLet)
} catch (error) {
    console.log("ReferenceError: testeLet is not defined")
}

console.log(testVar)

var testVar='Redeclarando';

console.log(testVar)