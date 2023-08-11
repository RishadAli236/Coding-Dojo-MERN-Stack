// Import express and faker
const express = require("express");
const { faker, ne } = require("@faker-js/faker")

const app = express();
const port = 8000;

//Create 2 functions: createUser, createCompany that return an object with required properties
const createUser = () =>{
    const _id = faker.number.int(10);
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const phoneNumber = faker.phone.number("+#-###-###-####");
    const email = faker.internet.email({firstName : firstName, lastName : lastName});
    const password = faker.internet.password(8);
    
    const fakeUser = { _id, firstName, lastName, phoneNumber, email, password};
    return fakeUser;
}

const createCompany = () => {
    const fakeCompany = {
        _id : faker.number.int(100),
        name : faker.company.name(),
        address : {
            street : faker.location.streetAddress(),
            city : faker.location.city(),
            state : faker.location.state(),
            zipcode : faker.location.zipCode(),
            country : faker.location.country()
        }
    }
    return fakeCompany;
}

app.get("/api/users/new", (request, response) => {
    const newUser = createUser();
    console.log(newUser);
    response.json(newUser);
})

app.get("/api/companies/new", (request, response) => {
    const newCompany = createCompany();
    console.log(newCompany);
    response.json(newCompany);
})

app.get("/api/user/company", (request, response) => {
    const newUser = createUser();
    const newCompany = createCompany();
    console.log(newUser, newCompany);
    response.json({User : newUser, Company : newCompany});
})


app.listen(port, () => console.log(`Listening on port ${port}`));