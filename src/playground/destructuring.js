//
// OBJECT DESTRUCTURING
//

const person = {
  name: 'Justin',
  age: 26,
  location: {
    city: 'Pleasanton',
    temp: 90
  }
};

// const name = person.name;
// const age = person.age;
const { name = 'Anonymous' /* default value if value doesn't exist */, age } = person; // object destructuring

console.log(`${name} is ${age}.`);

// if (person.location.city && person.location.temp) {
//   console.log(`It's ${person.location.temp} in ${person.location.city}.`)
// }
const { temp: temperature /* rename variable name */, city } = person.location; // object destructuring
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

// Challenge Time
const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;
console.log(publisherName); // Penguin - when valid name exist on publisher object, Self-Published - default

//
// ARRAY DESTRUCTURING
//

const address = ['1234 S Juniper Street', 'Philadelphia', 'Pennsylvania', '12345'];

const [, cityName, state = 'New York'] = address; // destructures in order - can leave blank if not in use to get to the other values

console.log(`You are in ${cityName} ${state}.`);

// Challenge time
const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
// grab first and third items using array destructuring
console.log(`A medium ${itemName} costs ${mediumPrice}`);