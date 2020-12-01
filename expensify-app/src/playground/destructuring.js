// const person = {
//     name: 'Jae',
//     age: 27,
//     location: {
//         city: 'Toronto',
//         temp: -10
//     },

// };

// const { name, age, location, zombie='No way', fakeNews: news = 'Stock crash' } = person;

// const { city, temp: temperature } = person.location;
// console.log(`${name} is in ${location.city}`)
// console.log(`${city} temperature is ${temperature}`)
// console.log(zombie)
// console.log(news)

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin',
//         year: 'NA'
//     }
// }

// const { title, author } = book;
// const { name = 'Me!!', year } = book.publisher;

// console.log(`${title} by ${author} is published by ${name}`)

const address = ['1004 SuperDuper Drive', 'Ontario', 'Toronto', 'M1B B1M'];

// const [ street, state, city, zip ] = address;
// array destructuring has no renaming function but default exist
const [ , , city, zip, fake = 'default' ] = address;
console.log(`You live in ${address[0]}  ${city} ${fake}`)

const item = ['Coffee', '$2', '$2.5', '$3'];
[ coffee, small, medium, large ] = item
console.log(`A medium ${coffee} costs ${medium}`)
