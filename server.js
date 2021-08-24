const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const mongoose = require('mongoose')
const axios = require('axios');
require('dotenv').config();
app.use(express.json());
const PORT = process.env.PORT || 8070

mongoose.connect(`${process.env.MONGO_URL}/exam`, { useNewUrlParser: true, useUnifiedTopology: true });


const { seedCollections } = require('./model/flower.model')
const { getFlowers, getFavFlowers, addFavFlowers, deleteFavFlowers } = require('./controller/flowers.controller')

// seedCollections();

app.get('/', (req, res) => { res.send('Welcome at home route from exam') })

app.get('/flowers', getFlowers)
app.get('/fav', getFavFlowers)
app.post('/add', addFavFlowers)
app.delete('/delete/:id', deleteFavFlowers)
// app.put('/update/:flower_id', updateFavFlowers)


app.listen(PORT, () => console.log(`listening on port http://localhost:${PORT}`))