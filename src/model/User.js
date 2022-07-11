// Already covered in part 2
const uniqid = require('uniqid')

/*
    This is the library used to validate the email address
    in the user registration process.
*/
const validator = require('validator')

/*
    This is the library responsible for encrypting the password
    provided by the user in the registration process.
*/
const bcrypt = require('bcrypt')

/*
    This is a basic JavaScript class which handles our
    fake users database. For more informations on JS
    classes, please visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/
class User {

    static users = []

    // tested
    static create(user) {
        if (User.validate(user)) {
            user.id = uniqid()
            user.password = bcrypt.hashSync(user.password, 10)
            User.users.push({ 
                id: user.id, 
                name: user.name, 
                email: user.email,
                password: user.password
            })
            return user
        } else {
            return undefined
        }
    }

    // tested
    static validate(user) {
        let valid = true
        if (!user.name) valid = false
        if (!user.email || !validator.isEmail(user.email)) valid = false
        if (!user.password) valid = false
        return valid
    }

    // tested
    static getOneByEmail(email) {
        const user = User.users.find(item => item.email == email)
        return user
    }

    // tested
    static comparePassword(password, hashPassword) {
        return bcrypt.compareSync(password, hashPassword)
    }
}

/*
    Here we are exporting the class we just created, so
    it can be imported inside other files.
*/
module.exports = User