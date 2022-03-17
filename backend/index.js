import express from 'express';
import {data} from './data.js';
import mongoose from 'mongoose';

const app = express();
mongoose.connect('mongodb://127.0.0.1:27017/amazona').then('connected to DB ').catch('not connected');

app.get('/api/product', (req, res) => {

    res.json(data.products);
})
app.get('/api/product/:id', (req, res) => {
    console.log(req.params.id)
    const product = data.products.find((x) => x._id === req.params.id)
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({message: 'page not found'});
    }
})

app.get('/', (req, res) => {

    res.json('Bonjour');

})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log('Server started  port :', port)
})
