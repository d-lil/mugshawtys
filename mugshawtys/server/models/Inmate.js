const { Schema } = require('mongoose');

const inmateSchema = new Schema({
    inmateId: {
        type: String,
        required: true,

    },
    inmateName: {
        type: String,
        required: true,
    },
    inmateImage: {
        type: String,
        required: false,
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