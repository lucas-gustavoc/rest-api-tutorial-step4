const express = require('express')
const router = new express.Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
require('dotenv').config()

/**
 * This is the request used to register a new user. See the API Reference
 * in the README.md to understand how it works.
 */
router.post('/register', async (req, res) => {
    try {
        const existingUser = await User.getOneByEmail(req.body.email)
        if (!existingUser) {
            const nUserId = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            if (nUserId) {
                const nUser = await User.getOneByEmail(req.body.email)
                delete nUser.password
                res.status(201).send(nUser)
            } else {
                res.status(400).send({ message: 'Invalid Entry!' })
            }
        } else {
            res.status(409).send({ message: 'User already registered. Please, login.'})
        }
        
    } catch(err) {
        res.status(500).send({ message: err.message })
    }
})

/**
 * This is the request used to log an user in. See the API Reference
 * in the README.md to understand how it works.
 */
router.post('/login', (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const user = User.getOneByEmail(email)
            if (user && User.comparePassword(password, user.password)) {
                const token = jwt.sign(
                    { name: user.name, email: user.email },
                    process.env.JWT_KEY,
                    { expiresIn: '2h'})
                
                const userDataToReturn = { ...user, token }
                delete userDataToReturn.password
                res.status(200).send(userDataToReturn)
            } else {
                res.status(400).send({ message: 'Invalid email/password.'})
            }
        } else {
            res.status(400).send({ message: 'Please provide email and password.'})
        }
    } catch(err) {
        res.status(500).send({ message: err.message })
    }
})

/**
 * This is the request used to test if an user is logged in. See the API Reference
 * in the README.md to understand how it works.
 */
router.get('/welcome', auth, (req, res) => {
    res.status(200).send({ message: `Welcome ${req.user.name}!`})
})

module.exports = router