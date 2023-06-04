const { Schema } = require('mongoose');

const inmateSchema = new Schema({
    _id: {
        type: String,
        required: true,

    },
    username: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: false,
    },
    about: {
        type: String,
        required: false,
    },
});

module.exports = inmateSchema;