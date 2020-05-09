const express = require('express')
const User = require('./../models/user')
const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        await user.generateAuthToken()
        const msg = 'Congo, You are successfully registered, Go Back to login page'
        res.status(201).send(msg)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        await User.findByCredentials(req.body.email, req.body.password)
        res.send(`<script>window.location.href="/chat.html?username=${req.body.email}&room=${req.body.room}";</script>`)
    } catch (e) {
        const msg = 'Something went wrong :( , Kindly recheck your email and password'
        res.status(400).send(msg)
    }
})

module.exports = router