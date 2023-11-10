// var (Not use), let (reasign values), const (can NOT change value. Use per default unless you know otherwise)

/*

// String, Numbers, Booleans, null, undefined, Symbol

const name = 'John';
const age = 30;


// concatenation
console.log('My name is '+ name +' and  I am ' + age);

//Template String
const hello =  `My name is ${name}`;

// String Properties
const s = 'Hello World';

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,6));
console.log(s.toUpperCase().substring(0,7));
console.log(s.split('')); // What goes between the () is the separator, as in G Sheets

// Arrays - variables that hold multiple values

const numbers = new Array (1,2,3,4,5);
const fruits = ['apples','oranges','pears', 10, true];
fruits [5] = 'grapes';
fruits.push('mangos'); // Pushes value to add to the end of the array 
fruits.unshift('strawberries'); // Adds value to the position 0 of the Array
console.log(Array.isArray(fruits)); // Checks if is Array or NOT
console.log(fruits.indexOf('oranges')); // Tells index # of value

// Object Literals

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 3,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person.firstName, person.hobbies); // Get multiple values
console.log(person.hobbies[1]); // Gets "movies"
person.email = 'john@gmail.com'; // Adds value


//
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appointment',
        isCompleted: false
    }
]

console.log(todos[1].text); // Gets "Meeting with boss"

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// FOR Loops

for (let i = 0; i <= 10; i++) {
  console.log(i);    
}

// WHILE Loops
let i = 0;
while (i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

// For of Loop
for (let todo of todos) {
    console.log(todo.text);
}

// forEach, map (Returns an Array), filter
todos.forEach(function (todo) {
    console.log(todo.text);
});

const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function (todo) {
   return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
})
console.log(todoCompleted);


// Conditionals

const x = 4  
if (x == 10) {  // Triple equals (===) would also validate same data format
    console.log('x is 10');

} else if(x > 10) {
console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

// OR === ||
// AND === &&

// Turnery Operator (?) && // Switches

const b = 10;
const color = b > 10 ? 'red' : 'blue';

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
    console.log('color is blue');
    break;

    default:    
    console.log('color is none');
        break;
}

console.log(color);

// Functions
function addNums(num1 = 1, num2 = 1) {
    return num1 + num2;
}
addNums();
addNums(5,4);
console.log(addNums(5,4));

// OBJECT ORIENTED PROGRAMMING

// Constructor Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {          // Add methods to this Function
        return this.dob.getFullYear();
    }
}

// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1990');
const person2 = new Person('Mary', 'Jane', '4-3-1880');
console.log(person2.dob.getFullYear());
console.log(person1.getBirthYear());

// Prototypes --> Move the methods to the constructor
Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear();
}

console.log(person2.getBirthYear());
console.log(person2);

/* Classes do the same but with Syntactic Sugar 
class Person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
}


// DOOOOM
// Selecting Elements from the DOM
    // Single element
    const submit = document.getElementById('submit');
    console.log(submit);

    console.log(document.querySelector('.flexit'));
    console.log(document.querySelector('h1'));

    // Multiple elements

    console.log(document.querySelectorAll('.items'));

// Loop through items
const items = document.querySelectorAll('.items');
items.forEach((item) => console.log(item));

// Manipulating the DOM
const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[2].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h4>HELLO</h4>';

const flexbox = document.querySelector('.flexbox');
flexbox.style.background = 'red'

 Events
flexbox.addEventListener('click', (e) => {
    e.preventDefault();
    // console.log(e.target.className);
    document.querySelector('.banner_bold_centered').style.background = 'ccc';
})
*/

const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.flexit');
const email = document.querySelector('#email');
const bday = document.querySelector('#bday');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (email.value === '' || bday.value === '') {
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
        console.log('We are A');
    } else {
        console.log('We are B');
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${email.value} : ${bday.value}`));

        userList.appendChild(li);

        // Clear fields
        email.value = '';
        bday.value = '';
    }
}









