const { Schema } = require('mongoose');

const inmateSchema = new Schema({
    inmateId: {
        type: String,
        required: true,

    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
});

module.exports = inmateSchema;