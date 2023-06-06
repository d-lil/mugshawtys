const { Schema } = require('mongoose');

const inmateSchema = new Schema({
    _id: {
        type: String,
        required: true,

    },
    inmateName: {
        type: String,
        required: true,
    },
    inmateImage: {
        type: String,
        required: true,
    },
    inmateGender: {
        type: String,
        required: true,
    },
    inmateAge: {
        type: String,
        required: false,
    },
    inmateAbout: {
        type: String,
        required: false,
    },
});

module.exports = inmateSchema;