const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    email: { type: String, require: true },
    title: { type: String, require: true },
    desc: { type: String, require: true },
}, { timestamps: true });

module.exports = mongoose.model('Note', noteSchema)