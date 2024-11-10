const mongoose = require('mongoose');

const gymSchema = new mongoose.Schema({
    name : { type: String, required: true },
    location: String,
    contact: String,
    facilities: [String], //W przypadku Karmy i ClimbingSpot są 2 obiekty
    openingHours: String,
    routes:[
        {
            difficulty : String,
            color: String,
            name: String,
            author: String,
            date: {type: Date, default: Date.now},
        },
    ],
});

module.exports = mongoose.model('Gym', gymSchema);