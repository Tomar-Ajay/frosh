const express = require('express')
const User = require('../models/user')

const router = new express.Router()

router.post('/registration', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.status(201).send( { user } )
    }
    catch (e) {
        console.log(e);
        res.status(400).send("Unable to register.")
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send( { user } ) 
    }
    catch (e) {
        console.log(e);
        res.status(401).send("Incorrect password.")
    }
})


module.exports = router