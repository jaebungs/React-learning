var nameVar = 'Andrew';
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'Parker';
nameLet = 'Looper'
console.log('nameLet', nameLet);

const nameConst = 'Brick'
console.log('nameConst', nameConst)

// Block scoping
var fullName = "Jay Park"
if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName)
// var can, const & let cannot
