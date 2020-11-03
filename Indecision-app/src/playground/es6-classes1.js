class Person{
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi, I am ${this.name}` 
    }
    getDescription(){
        return `Hi, I am ${this.name}. ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super();
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if (this.major){
            description += ` Studied ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, home){
        super(name, age)
        this.home = home;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.home){
            greeting += `. I live ${this.home}.`
        }
        return greeting
    }
}
const me = new Student('Jae Bung Park', 25, 'Troll');
console.log(me.getGreeting())
console.log(me.hasMajor())

const other = new Student('Kenzie', 25, 'Master');
console.log(other.getDescription())
console.log(other.hasMajor())

const travel = new Traveler('Lucy', 26, 'LA')
console.log(travel.getGreeting())
