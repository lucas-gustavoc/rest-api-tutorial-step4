const jwt = require('jsonwebtoken')
const User = require('../model/User')
require('dotenv').config()

const auth = (req, res, next) => {
    const token = req.body.token || req.query.token || (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[1])

    if (token) {
        try {
            const userData = jwt.verify(token, process.env.JWT_KEY)
            const user = userData.email && User.getOneByEmail(userData.email)
            
            if (user) {
                req.user = user
                next()
            } else {
                res.status(401).send({ message: 'User not found!' })
            }
            
        } catch(err) {
            res.status(401).send({ message: err.message })
        }
    } else {
        res.status(401).send({ message: 'Authentication needed. Please, provide your credentials.' })
    }
}

module.exports = auth