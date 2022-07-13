// Already covered in part 2 - This module will not be used anymore,
// once the database already creates an unique id for each new register
// const uniqid = require('uniqid')

const knex = require('knex')
const config = require('../../knexfile')
const db = knex(config.development)

/*
    This is a basic JavaScript class which handles our
    fake wishes database. For more informations on JS
    classes, please visit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/
class Wish {

    // tested
    static async create(wish) {
        if (Wish.validate(wish)) {
            wish.user_id = wish.userId
            delete wish.userId
            const id = await db('wishes').insert(wish)
            wish.id = id[0]
            return wish
        } else {
            return undefined
        }
    }

    // tested
    static validate(wish) {
        let valid = true
        if (!wish.wish) valid = false
        if (!wish.priority) valid = false
        if (!wish.userId) valid = false
        return valid
    }

    // tested
    static async getAll() {
        return await db.select().table('wishes')
    }

    // tested
    static async getOne(id) {
        const wish = await db('wishes').where({id})
        
        /**
         * In case of wish not found, knex returns an empty array.
         * Otherwise, it returns an array with just one item inside,
         * which would be the wish we're looking for.
         */
         if (wish.length === 0) return undefined
         return wish[0]
    }

    static async getAllOfOneUser(userId) {
        return await db('wishes').where({ user_id: userId })
    }

    // tested
    static async patch(id, patches) {
        const wishToPatch = {}

        if (patches.wish) wishToPatch.wish = patches.wish
        if (patches.priority) wishToPatch.priority = patches.priority
        
        const patch = await db('wishes').where({id}).update(wishToPatch, ['id', 'wish', 'priority'])
        
        if (patch > 0) return { message: 'Wish updated successfully!'}
        return undefined

    }

    // tested
    static async delete(id) {
        const deletion = await db('wishes').where({id}).del()
        
        if (deletion > 0) return { message: 'Wish deleted successfully!' }
        return undefined
    }
}

/*
    Here we are exporting the class we just created, so
    it can be imported inside other files.
*/
module.exports = Wish