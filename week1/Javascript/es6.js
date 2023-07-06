let x = 4;
if (true) {
    const x = 5;
    console.log(x)
}
console.log(x)

const nums = [1, 2, 3, 4, 5];
const [num1, num2, num3, num4] = nums;
console.log(num1);
console.log(typeof num1);

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (let index = 0; index < names.length; index++) {
            const name = names[index];

            console.log(name + ' was found at index ' + index);
        }
        // console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);

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
const { addresses  :[{city : Washington}, sherlock]} = person;
console.log(Washington)