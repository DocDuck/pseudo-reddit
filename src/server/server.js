import express from 'express';

const app = express(); 

app.get('/', (req, res) => {
    console.log('Hello from express')
})

app.listen(3000, () => {
    console.log('server started on localhost:3000')
})