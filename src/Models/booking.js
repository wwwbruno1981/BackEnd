const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
date : String,
approved : Boolean,
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
},
spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "spot"
}
});

module.exports = mongoose.model('booking', bookingSchema);