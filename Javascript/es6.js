// let x = 4;
// if (true) {
//     const x = 5;
//     console.log(x)
// }
// console.log(x)

//Destructuirng
const nums = [1, 2, 3, 4, 5];
const [num1, num2, num3, num4] = nums;
console.log(num1);
num1 = 55;
console.log(typeof num1);

// //Scope
// const beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//     function actuallyPrintingNames() {
//         for (let index = 0; index < names.length; index++) {
//             const name = names[index];

//             console.log(name + ' was found at index ' + index);
//         }
//         // console.log('name and index after loop is ' + name + ':' + index);
//     }
//     actuallyPrintingNames();
// }
// printNames(beatles);

const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};
const { addresses: [{ city }, address2] } = person;
// console.log(addresses)
console.log(city)
console.log(address2)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.key = "kiwi"
// console.log(fruits)
// console.log(fruits["-2"])
// const pushFront = (arr, val) =>{
//     let length = arr.length;
//     let x;
//     for (let i = arr.length; i >= 0; i--){
//         arr[i] = arr[i-1];
//     }
//     arr[0] = val;
//     return arr
// }
// console.log(pushFront(fruits, "kiwi"))

// let start = 1;
// let end = 100;
// let sum = 0;
// while(start <= end){
//     sum += start;
//     start++;}                
// console.log(sum)

// class Deck{
//     constructor(){
//         const suits =['Diamond', 'Heart', 'Spade', 'Club'];
//         const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//         const deck = [];
//         for(const suit of suits){
//             for(const face of faces){
//                 deck.push(this.createCard(suit, face));
//             }
//         }
//         this.deck = deck;
//     }
//     createCard(suit, face){
//         return face + "of" +suit;
//     }
// }
// class Deck{
//     constructor(){
//         const suits =['Diamond', 'Heart', 'Spade', 'Club'];
//         const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//         const deck = [];
//         suits.forEach(function(suit){
//             faces.forEach(function(face){
//                 deck.push(this.createCard(suit, face))
//             })
//         })
//         for(const suit of suits){
//             for(const face of faces){
//                 deck.push(this.createCard(suit, face));
//             }
//         }
//         this.deck = deck;
//     }
//     createCard(suit, face){
//         return face + "of" +suit;
//     }
// }
// class Deck{
//     constructor(){
//         const suits =['Diamond', 'Heart', 'Spade', 'Club'];
//         const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//         const deck = [];
//         suits.forEach(suit => {
//             faces.forEach(face => {
//                 deck.push(this.createCard(suit, face))
//             })
//         })
//         for(const suit of suits){
//             for(const face of faces){
//                 deck.push(this.createCard(suit, face));
//             }
//         }
//         this.deck = deck;
//     }
//     createCard(suit, face){
//         return face + "of" +suit;
//     }
// }

// myDeck = new Deck();
// console.log(myDeck.deck);

// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(num => {
//     sum += num;
// })
// console.log(sum);

setTimeout(function () {
    console.log("end")
}, 3000);

console.log("start");

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
console.log(groceryList)

const values = [1, 2, 3, 4, 5];
const cubes = values.map(val =>{  
    if(val > 2){
        return val**3}});
console.log(cubes)

const evens = values.filter((val) => {return val % 2 === 0})
console.log(evens);
const oddCubes = values.filter(val => val % 2 !== 0).map(val => val**3)
console.log(oddCubes)

const userName = "Rishad";
const email = "ry@mail.com";
const password = "flubbernuggets";
const user = { userName, email, password };
console.log(user);

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];
const newObj = [...kvArray];
const func = ({key, value}) => {
    console.log(key, value)
    console.log({[key] : value});
};
func(kvArray[0]);
console.log(newObj);

const key = 1;
const value = 10;
console.log({[key]:value})

  const reformattedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
  
  console.log(reformattedArray); // [{ 1: 10 }, { 2: 20 }, { 3: 30 }]
  console.log(kvArray);
  
const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];

console.log(groceryList.map( (item, index) => {
    return console.log(item)}
))

const noMonday = new Promise ((resolve, reject) => {
    if(new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});

console.log(noMonday)
noMonday.then((res) => console.log(res))

async function logMovies() {
    const response = await fetch("http://example.com/movies.json");
    console.log(response);
    const movies = await response.json();
    console.log(movies);
  }
