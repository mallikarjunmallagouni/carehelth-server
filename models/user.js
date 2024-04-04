const mongoose = require('mongoose');

const clientDetails = new mongoose.Schema({
    email: {
        type: String,
        required: [true,'please add a email'],
        trim: true,
        maxlength: [50,'Name can not be more than 50 characters']
    },
    name: {
        type: String,
        required: [true,'please add a name'],
        trim: true,
        maxlength: [50,'Name can not be more than 50 characters']
    },
    mobile: {
        type: String,
        required: [true,'please add a mobile'],
        trim: true,
        maxlength: [10,'Mobile can not be more than 10 characters']
    },
    description: {
        type: String,
        required: [true,'please add a description'],
        trim: true,
        maxlength: [50,'Description can not be more than 50 characters']
    }
})

module.exports = mongoose.model('clientDetails',clientDetails)