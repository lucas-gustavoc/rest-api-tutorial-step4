const express = require('express')
const router = new express.Router()
const User = require('../model/User')
const jwt = require('jsonwebtoken')

router.post('/register', (req, res) => {
    try {
        const existingUser = User.getOneByEmail(req.body.email)
        if (!existingUser) {
            const nUser = User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            if (nUser) {
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

router.post('/login', (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const user = User.getOneByEmail(email)
            if (user && User.comparePassword(password, user.password)) {
                const token = jwt.sign(
                    { name: user.name, email: user.email },
                    'BIGSECRET',
                    { expiresIn: '2h'}
                    )
                user.token = token
                delete user.password
                res.status(200).send(user)
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

module.exports = router