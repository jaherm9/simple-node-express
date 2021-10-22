const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())

// const port = process.env.PORT||3000;
const port = 5000;

app.get('/', (req, res) =>{
    res.send('Wow i am exited to learn node and express');
})

const users = [
    { id: 0, name: 'Munni', email:'munni@gmail.com', phone: '01737355669'},
    { id: 1, name: 'Moursheda', email:'moursheda@gmail.com', phone: '01737355669'},
    { id: 2, name: 'Lipimoni', email:'lipimoni@gmail.com', phone: '01737355669'},
    { id: 3, name: 'Shefali', email:'shefali@gmail.com', phone: '01737355669'},
    { id: 4, name: 'Kaniz', email:'kaniz@gmail.com', phone: '01737355669'},
    { id: 5, name: 'Afroja', email:'afroja@gmail.com', phone: '01737355669'}
]

app.get('/users', (req, res) =>{
    const search = req.query.search;

    // user query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
})

//app.METHOD
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})
app.listen(port, () =>{
    console.log('Listening to port', port)
})

app.get('/fruits', (req, res) =>{
    res.send(['mango', 'oranges', 'banana', 'apple']);
})

app.get('/fruits/mangoes/fazli',(req, res) =>{
    res.send('Yammy Yammy tok marka fazli');
})