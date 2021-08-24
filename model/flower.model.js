const mongoose = require('mongoose')

const flowersSchema = new mongoose.Schema({
    name: { type: String },
    photo: { type: String },
    instructions: { type: String },
    email: { type: String },
})
const flowersModel = mongoose.model('flowers', flowersSchema)

// function seedCollections() {
//     const Abdelqader = new flowersModel({
//         email: 'aboud.coding@gmail.com',
//         flowers: [{
//             name: 'lotus',
//             photo: 'https://hddesktopwallpapers.in/wp-content/uploads/2015/11/lotus-flower-images.jpg',
//             instructions: 'test test',
//         }]
//     })
//     Abdelqader.save()

//     const Roaa = new flowersModel({
//         email: 'roaa.abualeeqa@gmail.com',
//         flowers: [{
//             name: 'lotus',
//             photo: 'https://hddesktopwallpapers.in/wp-content/uploads/2015/11/lotus-flower-images.jpg',
//             instructions: 'test test',
//         }]
//     })
//     Roaa.save()
// }


module.exports = { flowersModel }