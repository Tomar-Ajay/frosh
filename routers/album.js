const express = require('express')
const Album = require('../models/album')

const router = new express.Router()

router.get('/viewAllTitles', async (req, res) => {

    try {
        const titles = await Album.find().select('title').exec();

        res.status(200).send( titles )
    }
    catch (e) {
        res.status(400).send("Some error occured.")
    }
})

router.post('/addAlbums', async (req, res) => {

    try {
        req.body.albums.forEach( async (element) => {
             const album = new Album(element)
             await album.save()
        });
        
        res.status(200).send("Albums added.")
    }
    catch (e) {
        res.status(400).send("Some error occured.")
    }
})


module.exports = router