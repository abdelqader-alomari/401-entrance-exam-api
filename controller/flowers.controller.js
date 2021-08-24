const axios = require('axios');
const { flowersModel } = require('../model/flower.model')
const getFlowers = (req, res) => {
    const url = `https://flowers-api-13.herokuapp.com/getFlowers`
    axios.
        get(url)
        .then(response => res.send(response.data.flowerslist))
        .catch(error => console.log(error))
}

const addFavFlowers = (req, ses) => {
    const { name, photo, instructions, email } = req.body
    const newFlower = new flowersModel({
        name: name,
        photo: photo,
        instructions: instructions,
        email: email,
    })
    newFlower.save()
}
const getFavFlowers = (req, res) => {
    const { email } = req.query
    flowersModel.find({ email: email }, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            console.log(data)
            res.send(data)
        }
    })
}

const deleteFavFlowers = (req, res) => {
    const id = req.params.id;
    flowersModel.deleteOne({ _id: id }, (error, data) => {

    })
    flowersModel.find({}, (error, data) => {
        res.send(data)
    })
};

const updateFavFlowers = (req, res) => {
    const flowerId = req.params.flower_id;
    const { name, photo, instructions } = req.body;
    flowersModel.findByIdAndUpdate({ _id: flowerId },
        {
            name: name,
            photo: photo,
            instructions: instructions,
        },
        { new: true }, (error, data) => {
            res.send(data);
        })
}




module.exports = { getFlowers, addFavFlowers, getFavFlowers, deleteFavFlowers, updateFavFlowers }