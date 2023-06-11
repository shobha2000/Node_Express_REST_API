import express from 'express';
import bodyParser from 'body-parser';


import usersRoutes from './routes/users.js';

//Initialise our express application

const app = express();
const PORT = 5000; //constant so capital--> this port number can be any number'

app.use(bodyParser.json());
app.use('/users', usersRoutes);

//create routing
app.get('/', (req, res) => res.send('Hello from Homepage.'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));