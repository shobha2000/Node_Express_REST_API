import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router(); 

let users = [
    
];

// all routes in here are starting with /users 
// GET --> to acess user profiles
router.get('/', (req, res) => {
    console.log(users);

   res.send(users);
});


//POST-->create user profiles --> add useers to Database
router.post('/', (req, res) => {

    const user = (req.body);

    // const userId = uuidv4(); 

    // const userWithId = { ...user, id: uuidv4()}

    users.push({ ...user, id: uuidv4()});

    res.send(`user with the name ${user.firstName} added to the database!`);
});


// /users/2 => req.params { id: 2} --> finding the user by Id

router.get('/:id', (req, res) => {

    const {id} = req.params;

    const foundUser = users.find((user) => user.id == id);

     
    res.send(foundUser);
});


//DELETE user details or profile
router.delete('/:id', (req, res) => {

    const { id}   = req.params;

    //id to delete 123

    // John 123
    // Jane 321
    //not same --> Id's must be unique to access, modify or delete users

    users = users.filter((user) => user.id != id);

    res.send(`user with the id ${id} deleted from the database.`);

});


// Modifying User profile--> UPDATE 
// PATCH method is used for partial Modification

router.patch('/:id', (req, res) => {

    const { id } = req.params;

    const { firstName, lastName, designation, salary, age} = req.body;

    const user = users.find((user) => user.id == id);

    if(firstName) user.firstName = firstName;
    if(lastName)  user.lastName = lastName;   
    if(designation) user.designation = designation;
    if(salary) user.salary = salary;
    if(age) user.age = age;
    
    res.send(`User with the id ${id} has been updated.`);
});


export default router;