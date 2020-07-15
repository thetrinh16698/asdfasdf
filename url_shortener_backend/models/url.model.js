const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
    },
    shortUrl: {
        type: String,
    },
    urlCode: {
        type: String,
    },
    clickCount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Url', urlSchema);