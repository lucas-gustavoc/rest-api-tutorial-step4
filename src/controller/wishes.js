const express = require('express')
const router = new express.Router() // Here we create the router we will be exporting later
const Wish = require('../model/Wish') // Here we import the Wish class from the model/Wish.js file
const auth = require('../middleware/auth')

/*
    In this file, we will be creating the routes that will be 
    accessed by the API consumers to make changes or request
    to our API register.
*/

// When you see "our_server_address", consider it to be your server.
// For testing purposes, it'll be localhost:3000. But it can change
// on production environments.

// This is a post request to the address http://our_server_address/wishes
// It expects JSON data and return the created register.
router.post('/wishes', auth, (req, res) => {
    try {
        const nWish = Wish.create({...req.body, userId: req.user.id})
        if (nWish) {
            res.status(201).send(nWish)
        } else {
            res.status(400).send({ message: 'Invalid entry!' })
        }
    } catch(err) {
        res.status(500).send({ message: err.message })
    }
})

// This is a get request to the address http://our_server_address/wishes
// It does not expect any data and return all the wishes list
router.get('/wishes', auth, (req, res) => {
    try {
        res.status(200).send(Wish.getAllOfOneUser(req.user.id))
    } catch(err) {
        res.status(500).send({ message: err.message })
    }
})

// This is a get request to the address http://our_server_address/wishes/[wishid]
// It expects just the wish ID on the request URL and returns the appropriate wish
router.get('/wishes/:id', auth, (req, res) => {
    try {
        const foundWish = Wish.getOne(req.params.id)
        if (foundWish && foundWish.userId == req.user.id) {
            res.status(200).send(foundWish)
        } else {
            res.status(404).send({ message: 'Wish not found!'})
        }
    } catch(err) {
        res.status(500).send({ message: err.message })
    }
})

// This is a patch request to the address http://our_server_address/wishes/[wishid]
// It expects JSON data and the wish ID on the URL, and return the updated register
router.patch('/wishes/:id', auth, (req, res) => {
    try {
        const wish = Wish.getOne(req.params.id)
        if (!wish) return res.status(404).send({ message: 'Wish not found!' })
        if (wish.userId == req.user.id) {
            const updatedWish = Wish.patch(req.params.id, req.body)
            res.status(200).send(updatedWish)
        } else {
            res.status(403).send({ message: 'This user has no access to this resource.'})
        }
    } catch(err) {
        res.status(500).send({ message: err.message })
    }
})

// This is a delete request to the address http://our_server_address/wishes/[wishid]
// It expects just the wish ID on the URL, and returns a message about the deletion
router.delete('/wishes/:id', auth, (req, res) => {
    try {
        const wish = Wish.getOne(req.params.id)
        if (!wish) return res.status(404).send({ message: 'Wish not found!' })
        if (wish.userId == req.user.id) {
            const deleteMessage = Wish.delete(req.params.id)
            res.status(200).send(deleteMessage)
        } else {
            res.status(403).send({ message: 'This user has no access to this resource.'})
        }
        
    } catch(err) {
        res.status(500).send({ message: err.message })
    }
})

module.exports = router