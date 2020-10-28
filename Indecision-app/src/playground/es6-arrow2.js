const add = function(a, b) {
    console.log(arguments)
    return a + b;
}
// babel src/playground/es6-arrow2.js --out-file=public/scripts/app.js --presets=env,react --watch

const user = {
    name: 'Park',
    cities: ['Seoul', 'Toronto', 'Tokyo'],
    printPlacesLived(){
        console.log(this.name);
        console.log(this.cities)

        this.cities.forEach((city)=>{
            console.log(this.name + ' has lived in ' + city)
        })
    }
}

// console.log(add(55, 5))

const multiplier = {
    numbers: [1, 10, 100, 5],
    multiplyBy: function(n) {
        return this.numbers.map((num) =>num * n)
    },
    multiply(n) {
        this.numbers.forEach((num) => {
        console.log(num * n)
        })
    }
}

console.log(multiplier.multiplyBy(3))
multiplier.multiply(5)