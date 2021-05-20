const mongoose = require('mongoose')
const validator = require('validator')

const albumSchema = mongoose.Schema({
    albumId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    thumbnailUrl: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})


const Album = mongoose.model('Album', albumSchema)

module.exports = Album