const mongoose = require('mongoose');

const ExampleSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    uName: {
        type: String,
        required: true,
        unique: true,
    },
    configs: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Example = mongoose.model('Example', ExampleSchema);

module.exports = Example;
