const square = function (x){
    return x * x;
}

const squareArrow = (x) => x * x;


console.log(square(8))
console.log(squareArrow(6))

let fullName = 'Jay Park'

const getFirstName = (fullName) => fullName.split(' ')[0]
console.log(getFirstName(fullName))